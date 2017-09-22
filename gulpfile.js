var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');
gulp.task('hello-world', function() {
    console.log('Our first Hello World Task');
});

gulp.task('vet', function() {
    log('Analyzing source');
    gulp.src([
            './src/**/*.js',
            './*.js'
        ])
        .pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

///////////

function log(msg) {

};