#!/bin/bash -e

gulp doc

if [ -d tmp ]; then rm -Rf tmp; fi
mkdir tmp && cd tmp
git clone git@github.com:angiolep/algojs-sorting.git --single-branch

cd algojs-sorting
git checkout --orphan gh-pages
git rm -rf .

cp -rp ../../docs/* .

git add -A .
git commit -am 'seed gh-pages'
git push -u origin gh-pages --force
