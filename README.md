# Infrastructure

![Infrastructure](https://i.imgur.com/C7ocuj4.jpg)

A build system that utilizes Sass as the preprocessor that get's piped into PostCSS, which behaves as a post processor and transpiles various plugins into the source code. The Javascript is minified with gulp-uglify. Gulp is the build system that ties it altogether and watches/exports all the files in the development folder to the production folder, and also provides a local server with Browsersync. 

### Guide
All SCSS and JavaScript code should be done in the development folder. 

The SCSS partials should be imported into the development/scss/style.scss file.

Infrastructure uses the lost grid and REM units by default. The font-size is set to 62.5% on the html tag selector (found in development/scss/_base.scss), so their is easier conversion from REM unit to pixel unit (e.g. 1.6rem == 16px). 

## Getting Started

These instructions will get you a copy of the system up and running on your local machine for development.

### Prerequisites

- Node Package Manager (NPM)
- Git
- Command Line Interface (CLI)
- Command Line Utility for Gulp (Gulp-Cli)


### Built With

* [PostCSS](https://github.com/postcss/postcss) - A CSS Preprocessor used for transforming styles with JS plugins. Plugins used in this project:
  * browser-sync
  * cssnano
  * gulp
  * gulp-postcss
  * gulp-sass
  * gulp-uglify
  * gulp-wait
  * lost
  * postcss-animation
  * postcss-cssnext ( + autoprefixer)

* [Gulp](http://gulpjs.com/) -  A toolkit for automating painful or time-consuming tasks in your development workflow.

* [Sass](http://sass-lang.com/) - Sass is an extension of CSS that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax.

### Installation
Copy the git repository to your local folder:
```
git clone https://github.com/Mohamed-M/Infrastructure.git
```

Run the NPM installer, which will run the package.json file and install all the necessary dependencies (i.e. PostCSS plugins):

```
npm install
```

Run the Gulp script to process the files, and open up a web server with Browsersync.

```
npm start
```
