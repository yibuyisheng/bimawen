var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var exec = require('child_process').exec;
var concat = require('gulp-concat');
var Q = require('q');

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
    var deferred = Q.defer();
    exec('jsx -x jsx ./static/jsx/ ./static/js/', function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        deferred.resolve();
    });
    return deferred.promise;
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