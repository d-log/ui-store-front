#! /bin/bash

# use case
# ./bin/update_home.sh

rm -rf dist/
git push origin master
ng build --env=self
cd dist
git init
git add .
git commit -am "initial commit"
git remote add origin git@github.com:d-log/ui-store-front-build.git
git push origin master -f

ssh root@192.168.86.28 << EOF
  rm -rf /var/www/ui-store-front-build/
  git clone https://github.com/d-log/ui-store-front-build.git
EOF
