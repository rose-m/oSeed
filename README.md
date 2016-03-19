# electron-starter
Electron basic starter template including TypeScript and AngularJS (1.x).

## Installation
Make sure you have `typings` (see [Typings](https://github.com/typings/typings)) installed.

Now just do:

    npm install
    typings install

## Usage
There are two npm commands available - `watch` and `electron`. Run `npm run watch` to have webpack track and recompile changes - `npm run electron` will start the app (with live reload).

## Development
All TypeScript files will be compiled into `build/app.js` and all SASS stylesheets will be compiled into `build/styles.js`. Make sure not to remove the references from `app/index.html`.
