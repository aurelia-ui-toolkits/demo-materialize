#!/bin/sh

npm install
npm install -g gulp
npm install -g jspm
jspm install -y

gulp watch
