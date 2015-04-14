var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var webpack = require('webpack');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    return gulp.src('static')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8000,
            open: 'http://127.0.0.1:8000/dist/main.html'
        }))
        .on('error', handleError);
});

gulp.task('js-pack', function(done) {
    webpack({
        entry: {
            main: path.join(__dirname, 'static', 'jsx', 'app.jsx')
        },
        output: {
            path: path.join(__dirname, 'static', 'dist'),
            filename: '[name].js',
            sourceMapFilename: '[file].map'
        },
        module: {
            loaders: [
                { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
            ]
        },
        bail: true
    }, function(err) {
        if (err) {
            console.log('file: ', err.module.userRequest);
            console.log('line: ', err.error.lineNumber, 'column: ', err.error.column);
            console.log(err.message);
        }
        done();
    });
});

gulp.task('less', function() {
    return gulp.src('./static/less/main.less')
        .pipe(sourcemaps.init())
        .on('error', handleError)
            .pipe(less({
                paths: [path.join(__dirname, 'static', 'less')]
            }))
            .on('error', handleError)
        .pipe(sourcemaps.write())
        .on('error', handleError)
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
        .on('error', handleError)
        .pipe(gulp.dest('./static/dist'));
});

gulp.task('html', function () {
    return gulp.src('./static/mobile/main.html')
        .pipe(gulp.dest('./static/dist/'));
});

gulp.task('fonts', function () {
    return gulp.src('./static/fonts/*')
        .pipe(gulp.dest('./static/dist/fonts/'));
});

gulp.task('compile', ['less', 'js-pack', 'html', 'fonts']);

gulp.task('watch', ['compile', 'webserver'], function() {
    gulp.watch(['./static/less/**', './static/less/**/*.less', ], ['less']);
    gulp.watch(['./static/jsx/**', './static/jsx/**/*.jsx', './static/jsx/**'], ['js-pack']);
    gulp.watch(['./static/mobile/main.html'], ['html']);
    gulp.watch(['./static/fonts/*.*', './static/fonts/**'], ['fonts']);
});

function handleError(error) {
    console.log(error.message);
    console.log(error.fileName);
    console.log('line:', error.line, 'column:', error.column);
    this.emit('end');
}