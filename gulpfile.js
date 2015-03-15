var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var exec = require('child_process').exec;
var concat = require('gulp-concat');
var Q = require('q');
var jsx = require('gulp-jsx');

gulp.task('js-concat', ['jsx'], function() {
    return gulp.src([
            './static/js/components/*.js',
            './static/js/pages/*.js',
            './static/js/app.js'
        ])
        .pipe(concat('main.js'))
        .on('error', function(error) {
            console.log(error);
        })
        .pipe(gulp.dest('./static/js/'));
});

gulp.task('jsx', function() {
    return gulp.src('./static/jsx/**/*.jsx')
        .pipe(jsx())
        .pipe(gulp.dest('./static/js/'));
});

gulp.task('less', function() {
    return gulp.src('./static/less/main.less')
        .pipe(less({
            paths: [path.join(__dirname, 'static', 'less')]
        }))
        .on('error', function(error) {
            console.log(error);
        })
        .pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function() {
    gulp.watch(['./static/less/**/*.less'], ['less']);
    gulp.watch(['./static/jsx/**/*.jsx'], ['js-concat']);
});