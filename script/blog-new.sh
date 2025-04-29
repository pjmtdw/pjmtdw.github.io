#!/bin/bash
if [ -z "$1" ]; then
  read -p "file prefix: " PREFIX
  if ! [ "$PREFIX" ];then
    exit
  fi
  ROOT="./src/content/blog/"
  FILE_PATH="$ROOT/${PREFIX}.md"
  if [ -e "$FILE_PATH" ];then
    echo "$FILE_PATH already exists"
    exit
  fi
  THIS=$(readlink -f "${BASH_SOURCE[0]}")
  nvim  -c ":silent edit $FILE_PATH" -c ":0r! $THIS -t" -c ":2"
elif [ "$1" == "-t" ]; then
  DT=$(date +"%b %d %Y")
  cat <<HEREDOC
---
title: 
description: 
pubDate: $DT
---
HEREDOC
fi
