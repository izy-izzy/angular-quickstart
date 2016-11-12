"use strict";

var scss = require("gulp-sass");
var gulp = require("gulp");
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var runSequence = require('run-sequence');

gulp.task('default', function(){
  return runSequence('imagemin', 'scss');
});

gulp.task('scss', function () {
  return gulp.src('app/scss/main.scss')
  	.pipe(sourcemaps.init())
    .pipe(scss().on('error',
    	function(e) {
    		gutil.log(e);
    		this.emit('end');
    	})
    )
    //.pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('app/scss/**/*.scss', ['scss']);
    gulp.watch('app/img/**/*.*', ['imagemin']);
    gulp.watch('app/**/*.html', ['copy-html']);
});

gulp.task('copy-html', function() {  
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('imagemin', function(){
    return gulp.src('app/img/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/img'));
});



