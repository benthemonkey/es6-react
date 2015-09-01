const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

gulp.task('stylesheets', function stylesheets() {
  gulp.src('main.scss')
      .pipe(plugins.sass())
      .pipe(gulp.dest('dist'));
});

gulp.task('javascript-lint', function javascriptLint() {
  return gulp.src('*.js')
             .pipe(plugins.eslint())
             .pipe(plugins.eslint.format());
});

gulp.task('javascript', ['javascript-lint'], function javascript() {
  gulp.src('main.js')
      .pipe(plugins.babel())
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', function watch() {
  gulp.watch('*.js', ['javascript']);
});

gulp.task('default', ['stylesheets', 'javascript']);
