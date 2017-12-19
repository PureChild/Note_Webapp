// gulp
var gulp = require('gulp');

// 플러그인
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var css = require('gulp-clean-css');
var watch = require('gulp-watch');

// js 파일
var alljs = ['src/js/FileSaver.js', 'src/js/screenfull.js','src/js/util.js', 'src/js/app.js'];

gulp.task('html', function() {
  return gulp.src('index.html')
  .pipe(connect.reload())
  .pipe(gulp.dest(''));
});

// js 파일 빌드
gulp.task('scripts', function() {
    return gulp.src(alljs)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
});
gulp.task('minify:script', function() {
    return gulp.src('all.js')
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// css 파일 빌드
gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('build', ['css', 'scripts', 'minify:script']);
gulp.task('default', ['build', 'watch']);
