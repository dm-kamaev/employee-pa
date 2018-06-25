#!/bin/bash

# SCRIPT FOR FATST COMMIT vue_components AND update via node_modules

# commit new code
cd /p/vue_components;
git pull origin master;
git add .;
git commit;
git push -u origin master;

# update vue_components
cd /p/employee-pa;
npm update vue_components;
echo 'SUCCESS update vue_components';
# rm -rf ./node_modules/vue_components;
# npm install vue_components;
