var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

gulp.task('styles', function() {
  return sass('styles.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('.'))
    .pipe(notify({ message: 'Sass compiled' }));
});

gulp.task('fs-styles', function() {
  return sass('jquery.fancyspinbox.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('.'))
    .pipe(notify({ message: 'jquery.fancyspinbox.scss compiled' }));
});

gulp.task('watch', function() {
	gulp.watch('styles.scss', ['styles']);
	gulp.watch('jquery.fancyspinbox.scss', ['fs-styles']);
});
