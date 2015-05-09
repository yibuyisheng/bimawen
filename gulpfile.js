var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var webpack = require('webpack');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var webserver = require('gulp-webserver');
var killProcess = require('kill-process');

/**
 * 清理端口，保证 8000 端口未被占用
 * */
//gulp.task('clear-port', function(done) {
//    killProcess(8000).then(done, done);
//});
gulp.task('webserver', function() {
    var remoteHost = 'http://121.40.167.199/';
    return gulp.src('static')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8000,
            open: 'http://127.0.0.1:8000/dist/main.html',
            proxies: [
                {source: '/account/send/validate_code/', target: remoteHost + 'account/send/validate_code/'},
                {source: '/account/sign/in/', target: remoteHost + 'account/sign/in/'},
                {source: '/account/my/car/', target: remoteHost + 'account/my/car/'},
                {source: '/account/car/brand/', target: remoteHost + 'account/car/brand/'},
                {source: '/account/car/series/', target: remoteHost + 'account/car/series/'},
                {source: '/account/car/models/', target: remoteHost + 'account/car/models/'},
                {source: '/account/query/province/', target: remoteHost + 'account/query/province/'},
                {source: '/account/my/car/default/', target: remoteHost + 'account/my/car/default/'},
                {source: '/account/my/address/list/', target: remoteHost + 'account/my/address/list/'},
                {source: '/account/my/address/default/', target: remoteHost + 'account/my/address/default/'},
                {source: '/account/query/city/', target: remoteHost + 'account/query/city/'},
                {source: '/account/my/address/', target: remoteHost + 'account/my/address/'},
                {source: '/account/query/item/type/', target: remoteHost + 'account/query/item/type/'},
                {source: '/upkeep/reservation/add/', target: remoteHost + 'upkeep/reservation/add/'}
            ]
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
                { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
                { test: /\.js$/, loader: 'uglify' }
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
    gulp.watch(['./static/less/**', './static/less/**/*.less'], ['less']);
    gulp.watch(['./static/jsx/**', './static/jsx/**/*.jsx'], ['js-pack']);
    gulp.watch(['./static/mobile/main.html'], ['html']);
    gulp.watch(['./static/fonts/*.*', './static/fonts/**'], ['fonts']);
});

function handleError(error) {
    console.log(error.message);
    console.log(error.fileName);
    console.log('line:', error.line, 'column:', error.column);
    this.emit('end');
}