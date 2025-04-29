#!/bin/bash

BLOG_DIR="src/content/blog/"

function gen_image(){
  local out="$1"
  if [ -e "$out" ];then
    echo "Skipping: $out"
    return
  fi
  local caption="$2"
  magick \
    -quality 30 \
    -size 400x400 \
    -background '#1f1f28' \
    -fill '#dcd7ba' \
    -font Noto-Serif-Medium \
    -gravity center \
    -pointsize 36 \
    caption:"$caption" \
    -extent 420x420 \
    $out
  echo "Generated: $out"
}

gen_image ./public/img/open_graph.webp "Pjmtdw's Site"

shopt -s nullglob
for i in $BLOG_DIR/*.{md,mdx};do
  base=$(basename $i .md)
  base=${base%.mdx}
  title=$(grep '^title:' "$i" | head -n 1 | sed 's/^title:\s*//')
  outfile="./public/img/blog/$base.webp"
  gen_image "$outfile" "$title"
done

