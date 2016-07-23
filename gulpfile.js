'use strict';
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    ts = require('gulp-typescript'),
    pug = require('gulp-pug'),
    server = require('browser-sync').create(),
    reload = server.reload;

gulp.task('default', ['serve']);

gulp.task('serve', ['ts2js', 'pug2html'], function(){
  server.init({
    server: {
      //baseDir: './builds/development'
      baseDir: './'
    }
  });
// pug/html 
  gulp.watch('src/templates/**/*.pug', ['pug2html']);
  gulp.watch('builds/development/*html').on('change', reload);

// typescript/javascript
  gulp.watch('src/typescript/**/*.ts',['ts2js']);
  gulp.watch('builds/development/js/*js').on('change', reload);

// sass/css
  gulp.watch('src/scss/*scss', ['sass2css']);
});

gulp.task('sass2css', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("builds/development/css"))
        .pipe(server.stream());
});

gulp.task('ts2js', function () {
  return gulp.src('src/typescript/main.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'main.js'
    }))
    .pipe(gulp.dest('builds/development/js'));
});
gulp.task('pug2html', function () {
  return gulp.src('src/templates/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('builds/development/'));
});    
