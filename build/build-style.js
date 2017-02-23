var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// gulp.task('css', function () {

// });

gulp.task('default', function () {
    gulp.src('../src/styles/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 9']
        }))
        .pipe(rename('uni-component.css'))
        .pipe(gulp.dest('../dist/'));
});