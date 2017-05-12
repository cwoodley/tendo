var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function(){
  return gulp.src('assets/stylesheets/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('default', [ 'css' ]);
