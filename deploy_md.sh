#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
#npm run docs:build

# 进入生成的文件夹
#cd ./dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add docs/ readme.md deploy.sh deploy_md.sh package.json package-lock.json
git commit -m 'md_up'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:Ryukarin/EmuELEC.Guide.git master:main_v2

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

#cd -
