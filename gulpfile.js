// gulp-cli needs to be installed globally to run 'npm start' or 'gulp'
// npm install -g gulp-cli

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const animation = require('postcss-animation');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');
const wait = require('gulp-wait');

var development = 'development';
var production = 'production';

// Compile Sass files
gulp.task('sass', function() {
  var processors = [
    animation,
    lost,
    cssnext,
    // cssnano
  ];
  return gulp.src([development + '/scss/*.scss'])
    .pipe(wait(500))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest(production + '/css/'))
    .pipe(browserSync.stream());
});

// JavaScript minification
gulp.task('js', function () {
  return gulp.src(development + '/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest(production + '/js/'));
});

// Watch for changes and reload 
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './' + production
  });

  gulp.watch([development + '/scss/**/**.scss'], ['sass']);
  gulp.watch([development + '/js/**/**.js'], ['js']);
  gulp.watch(production + '/*.html').on('change', browserSync.reload);
});

// Default task
gulp.task('default', ['serve']);