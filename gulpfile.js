var gulp   = require('gulp');
var mocha  = require('gulp-mocha');
var jshint = require('gulp-jshint');

var js_src   = ['./scripts/*.js'];
var html_src = './*.html';

gulp.task('lint', function() {
  return gulp.src(js_src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp.src('./scripts/test.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', function() {
  gulp.watch(js_src,   ['lint', 'test']);
  gulp.watch(html_src, ['test']);
});

gulp.task('default', ['lint', 'test', 'watch']);
