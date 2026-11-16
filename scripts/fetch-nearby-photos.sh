#!/usr/bin/env bash
set -euo pipefail

# One identifiable Wikimedia Commons scene for each new attraction.
names=(royal-palace silver-pagoda national-museum wat-ounalom independence-monument sisowath-quay)
titles=(
  'File:Another stupa at silver pagoda.JPG'
  'File:2016 Phnom Penh, Pałac Królewski, Srebrna Pagoda (02).jpg'
  'File:2016 Phnom Penh, Muzeum Narodowe Kambodży (07).jpg'
  'File:Phnom Penh, Wat Ounalom, (2).jpg'
  'File:02-Independence Monument Phnom Penh-nX-3.jpg'
  'File:Sisowath Quay Phnom Penh Cambodia.jpg'
)
mkdir -p public/attractions
for index in "${!names[@]}"; do
  title="${titles[$index]}"
  target="public/attractions/${names[$index]}.jpg"
  url=$(curl -fsSLG --retry 2 --max-time 30 'https://commons.wikimedia.org/w/api.php' \
    --data-urlencode 'action=query' --data-urlencode "titles=$title" \
    --data-urlencode 'prop=imageinfo' --data-urlencode 'iiprop=url' \
    --data-urlencode 'iiurlwidth=960' --data-urlencode 'format=json' \
    | jq -r '.query.pages[]?.imageinfo[0] | .thumburl // .url // empty')
  if [[ -n "$url" ]]; then
    curl -fLsS --retry 2 --max-time 60 "$url" -o "$target"
    echo "${names[$index]}: $(stat -c%s "$target") bytes from $title"
  else
    echo "Missing image: $title" >&2
  fi
done
