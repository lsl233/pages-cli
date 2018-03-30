const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const uglify = require('gulp-uglify')
const zip = require('gulp-zip')
const gulpSequence = require('gulp-sequence')
const del = require('del')
const browserSync = require('browser-sync').create()

gulp.task('html', function () {
  const options = {
    removeComments: true,
    collapseWhitespace: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
  }
  return gulp.src('src/**/*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'))
})

gulp.task('css', function () {
  const plugins = [
    autoprefixer({browsers: ['last 3 version']}),
    cssnano({
      safe: true
    })
  ]
  return gulp.src('./src/**/*.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist'));
})

gulp.task('js', function () {
  return gulp.src('./src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('img', function () {
  return gulp.src('./src/imgs/**/*')
    .pipe(gulp.dest('dist/imgs'))
})

gulp.task('zip', function () {
  return gulp.src('dist/**/*')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'))
  }
)

gulp.task('remove:dist', function () {
  return del([
    './dist',
    './dist.zip'
  ])
})

gulp.task('dev', function () {
  browserSync.init({
    files: ['src/css/**/*.css', 'src/html/**/*.html', 'src/js/**/*.js'],
    server: {
      baseDir: './src',
      index: 'html/index.html',
    }
  })
})

gulp.task('build', gulpSequence(['remove:dist'], ['html', 'css', 'js', 'img'], 'zip'))
