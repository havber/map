/*jshint node: true*/

'use strict';


var gulp        = require('gulp'),
    browserify  = require('browserify'),
    transform   = require('vinyl-transform'),
    uglify      = require('gulp-uglify'),
    less        = require('gulp-less'),
    browsersync = require('browser-sync'),
    reload      = browsersync.reload;

gulp.task('browserify', function () {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./src/js/*.js'])
        .pipe(browserified)
        .pipe(uglify())
        .pipe(gulp.dest('./bin/app/js'));
});

gulp.task('less', function () {
    return gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./bin/app/css'));
});

gulp.task('browsersync', function () {
    browsersync({
        server: {
            baseDir: './bin/app'
        }
    });
});

gulp.task('watch', ['browsersync'], function() {
    gulp.watch(
        ['src/**/*', 'bin/app/index.html'],
        ['browserify', 'less', browsersync.reload]
    );
});
