var gulp = require('gulp'),
		jade = require('gulp-pug'),
		connect = require('gulp-connect');
		sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    csscomb = require('gulp-csscomb');
    tinify = require('gulp-tinify');
    cleanCSS = require('gulp-clean-css');
    uglify = require('gulp-uglify');
    pump = require('pump');

// Jade
gulp.task('jade', function(){
	gulp.src('./assets/jade/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./public'))
		.pipe(connect.reload());
});


gulp.task('sass', function () {
  return gulp.src('./assets/**/*.sass')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      includePaths: require('node-neat').includePaths
    }).on('error', sass.logError))
    .pipe(csscomb())
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
});


gulp.task('tinify', function() {
    gulp.src('./assets/img/**/*')
        .pipe(tinify('hrTzJ9r4ZgkNqCls49HcGs08G51hR2XU'))
        .pipe(gulp.dest('./public/img'));
});

// Minify JS
gulp.task('js', function (cb) {
  pump([
        gulp.src('./assets/js/*.js'),
        uglify(),
        gulp.dest('./public/js/')
    ],
    cb
  );
});


//Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('./public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css/'));
});

// Watch
gulp.task('watch', function (){
	gulp.watch('./assets/**/*.js', ['js'])
	gulp.watch('./assets/jade/**/*.jade', ['jade']);
  // gulp.watch('./assets/img/*', function(event) {
  //   gulp.run('image');
  // });
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/**/*.sass', ['sass']);
});

// Server
gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('default', ['jade', 'sass', 'js', 'watch', 'sass:watch', 'connect', 'tinify', 'minify-css'])