var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('stylesheets', function() {
    gulp.src('main.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('javascript-lint', function() {
    return gulp.src('*.js')
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format());
});

gulp.task('javascript', ['javascript-lint'], function() {
    gulp.src('main.js')
        .pipe(plugins.babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['stylesheets', 'javascript']);
