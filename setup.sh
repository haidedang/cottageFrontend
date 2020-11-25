#!/bin/bash

rm -rf .cache public 
npm run build 
npm run serve
