cd dist
git init
git add ./*
git commit -m "Upload source code"
git branch -M website
git remote add origin https://github.com/gvbvdxx/ggm2.git
git push -f origin website