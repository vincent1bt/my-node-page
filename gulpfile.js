const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

const stylesRoute = './app/assets/styles/*.scss';
const stylesDest = './app/nginx/public/styles';

gulp.task('css', () => {
  return gulp.src(stylesRoute)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest(stylesDest));
});

gulp.task('watch:css', () => {
  gulp.watch(stylesRoute, gulp.series('css'));
});
