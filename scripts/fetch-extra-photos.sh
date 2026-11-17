#!/usr/bin/env bash
set -euo pipefail

names=(wat-botum wat-botum-park friendship-monument sihanouk-memorial chaktomuk-hall central-market)
titles=(
  'File:2016 Phnom Penh, Wat Botum (09).jpg'
  'File:Botum Pagoda Park.jpg'
  'File:Cambodia-Vietnam Friendship Monument.jpg'
  'File:2016 Phnom Penh, Pomnik z posągiem Króla Ojca Norodoma Sihanouka (01).jpg'
  'File:Chaktomuk Conference Hall, Detail Konferenzsaal, Phnom Penh.jpg'
  'File:20171125 Central Market, Phnom Penh 4368 DxO.jpg'
)
mkdir -p public/attractions
for index in "${!names[@]}"; do
  target="public/attractions/${names[$index]}.jpg"
  title="${titles[$index]}"
  url=$(curl -fsSLG --retry 2 --max-time 30 'https://commons.wikimedia.org/w/api.php' \
    --data-urlencode 'action=query' --data-urlencode "titles=$title" \
    --data-urlencode 'prop=imageinfo' --data-urlencode 'iiprop=url' \
    --data-urlencode 'iiurlwidth=960' --data-urlencode 'format=json' \
    | jq -r '.query.pages[]?.imageinfo[0] | .thumburl // .url // empty')
  if [[ -z "$url" ]]; then echo "No photo found for ${names[$index]}" >&2; continue; fi
  curl -fLsS --retry 2 --max-time 60 "$url" -o "$target"
  echo "${names[$index]}: $(stat -c%s "$target") bytes"
done
