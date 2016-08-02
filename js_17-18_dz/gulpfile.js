'use strict';

const gulp = require('gulp'),
cleanCSS = require('gulp-clean-css'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
pump = require('pump');


gulp.task('scripts', function() {
	return gulp.src('src/css/src/{style.css,style_gulp.css}')
	.pipe(concat('style.css'))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('bild/css/'));
});
// gulp.task('minify:css', function() {
// 	return gulp.src('css/dist/*.css')
// 	.pipe(cleanCSS({compatibility: 'ie8'}))
// 	.pipe(gulp.dest('css/'));
// });

gulp.task('scriptsJS', function() {
	return gulp.src('src/js/src/*.js')
	.pipe(concat('script.js'))
	.pipe(gulp.dest('src/js/dist/'));
});

gulp.task('compress', ['scriptsJS'], function (cb) {
	pump([
		gulp.src('src/js/dist/*.js'),
		uglify(),
		gulp.dest('bild/js/')
		],
		cb
		);
});

gulp.task('default', ['scripts', 'scriptsJS', 'compress']);

