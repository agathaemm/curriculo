//inclui o gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// define a tarefa sass 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
// define a tarefa watch
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});