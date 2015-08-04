var gulp = require('gulp');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var spawn = require('child_process').spawn;
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var exec = require('child_process').exec;
var findAllFiles = require('glob');

gulp.task('compass', function() {

  // var stylesheet = "_includes/sass/style.scss";
  
  findAllFiles('_includes/stylesheets/**/!(_)*.scss',{}, function (error, files) {
      var stylesheets = files.join(' ');
      console.log("Compiling Sass: " + stylesheets);
      exec('bundle exec compass compile ' + stylesheets , function(err, stdout, stderr) {
            console.log(stdout);
      });
  });

    // gulp.src('./_includes/sass/*.scss')
    // .pipe(compass({
      // config_file: './config.rb',
      // css: 'css',
      // sass: '_includes/sass'
    // }))
    // .pipe(gulp.dest('css'));

});

gulp.task('minify-css', function () {
    gulp.src('./style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./css/'));

});

gulp.task('clean-css', function () {
    return gulp.src('./style.css', {read: false})
        .pipe(clean());
});

gulp.task('jekyll',['compass'], function () {

    exec('bundle exec jekyll serve', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('css', ['concat-css', 'minify-css']); 

// Watch for changes
gulp.task('watch', function () {

    gulp.watch('_includes/stylesheets/**/*.scss', ['compass']);

    gulp.watch(['_data/*.yml', '*.html', '*/*.html','**/**/*.html', '*/*.md', '_includes/css/*.css', '!_site/**', '!_site/*/**'], ['jekyll']);

})

gulp.task('production', ['css', 'jekyll', 'watch']); 

gulp.task('dev', ['jekyll', 'watch']); 
