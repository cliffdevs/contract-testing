#!/bin/sh
rm -rf /project/build/reports/contract-validation
mkdir /project/build/reports/contract-validation

npm install
node index
