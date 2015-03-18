var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var webpack = require('webpack');

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
                { test: /\.jsx$/, loader: "jsx-loader?harmony" }
            ]
        }
    }, function(err) {
        done(err);
    });
});

gulp.task('less', function() {
    return gulp.src('./static/less/main.less')
        .pipe(less({
            paths: [path.join(__dirname, 'static', 'less')]
        }))
        .on('error', function(error) {
            console.log(error);
        })
        .pipe(gulp.dest('./static/dist'));
});

gulp.task('html', function() {
    return gulp.src('./static/mobile/main.html')
        .pipe(gulp.dest('./static/dist/'));
});

gulp.task('watch', ['less', 'js-pack'], function() {
    return gulp.watch([
            './static/less/**/*.less',
            './static/jsx/**/*.jsx',
            './static/mobile/main.html'
        ], [
            'less',
            'js-pack',
            'html'
        ]);
    // gulp.watch(['./static/less/**/*.less'], ['less']);
    // gulp.watch(['./static/jsx/**/*.jsx'], ['js-pack']);
    // gulp.watch(['./static/mobile/main.html'], ['html']);
});