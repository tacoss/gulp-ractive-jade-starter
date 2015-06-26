gulp-ractive-jade-starter
============
[![Build Status](https://travis-ci.org/gextech/gulp-ractive-jade-starter.svg)](https://travis-ci.org/gextech/gulp-ractive-jade-starter)

Starter project for Jade-flavored Ractive templates + CoffeeScript + LESS + Webpack and Gulp

# Features
- Jade support for standalone and Ractive templates
- CoffeeScript compilation with sourcemaps
- LESS stylesheets support
- Scripts and Ractive templates are optimized and bundled with Webpack 
- Lossless image optimization
- Icon font creation from `svg` files
- `build:production` task runs tests, compression & filename revisioning
- Example Travis CI integration that runs karma tests and production build

# Installation
Just clone the repo, `cd` to it and install project's dependencies
```
npm install
```

# Usage
Most of the time you'll be using the default task (alias of `build:development`):
```
gulp
```
> You may need to install gulp globally (`npm install -g gulp`).

This task includes a watcher and a live reloader so that changes in `src` are detected and compiled into `build`.

## Gulp tasks
For a complete list of the available tasks
```
gulp help
```

### Production build
Not yet working.  Sorry.  When it does, 
```
gulp build:production
gulp server
```

## Folder structure

TBA

# Credits
Most of the code was taken from greypant's excellent [gulp-starter](https://github.com/greypants/gulp-starter) project.