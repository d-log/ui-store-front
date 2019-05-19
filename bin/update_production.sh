#! /bin/bash

# use case
# ./bin/update_production.sh

rm -rf dist/
git push origin master
ng build --env=prod
cd dist
git init
git add .
git commit -am "initial commit"
git remote add origin git@github.com:d-log/ui-store-front-build.git
git push origin master -f

ssh -i ~/.ssh/aws-marcuschiu.pem ec2-user@www.marcuschiu.com << EOF
  rm -rf ui-store-front-build/
  git clone https://github.com/d-log/ui-store-front-build.git
EOF
