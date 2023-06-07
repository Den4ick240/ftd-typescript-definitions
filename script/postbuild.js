const fs = require('fs');

let indexFile = fs.readFileSync('./dist/index.d.ts', { encoding: 'utf-8' });
indexFile = indexFile.replace('/// <reference path="../src/types/index.d.ts" />', '/// <reference path="types/index.d.ts" />');
fs.writeFileSync('./dist/index.d.ts', indexFile);