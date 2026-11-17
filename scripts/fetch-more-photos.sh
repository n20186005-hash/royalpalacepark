#!/usr/bin/env bash
set -euo pipefail
names=(wat-phnom post-office national-library night-market phsar-chas wat-langka tuol-sleng olympic-stadium)
titles=(
  'File:2016 Phnom Penh, Wat Phnom (02).jpg'
  'File:2016 Phnom Penh, Centralny Urząd Pocztowy (01).jpg'
  'File:National Library - panoramio (1).jpg'
  'File:Phnom Penh Night Market.jpg'
  'File:Sangkat Phsar Chas, Phnom Penh, Cambodia - panoramio.jpg'
  'File:2016 Phnom Penh, Wat Langka (27).jpg'
  'File:Tuol Sleng Genocide Museum Corridor and barbed wire.jpg'
  'File:Phnom Penh Olympic Stadium Panorama (14377698729).jpg'
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
  if [[ -z "$url" ]]; then echo "No photo found for ${names[$index]}" >&2; continue; fi
  curl -fLsS --retry 2 --max-time 60 "$url" -o "$target"
  echo "${names[$index]}: $(stat -c%s "$target") bytes"
done
