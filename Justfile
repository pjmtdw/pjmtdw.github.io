new:
  ./script/blog-new.sh
install:
  npm install
dev:
  npm run dev
build:
  npm run build
preview:
  npm run preview
astro:
  npm run astro

# since `npm run build` deletes all the content of `dist/`, we cannot use `dist/` as submodule. instead we use `master/` as submodule and use rsync.
rsync:
  rsync -av --delete --exclude='/.git' --exclude '/.github' ./dist/ ./master/
