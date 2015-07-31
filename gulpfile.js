var gulp = require('gulp');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var spawn = require('child_process').spawn;
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var exec = require('child_process').exec;

gulp.task('compass', function() {

  var stylesheet = "_includes/sass/style.scss";
  exec('bundle exec compass compile ' + stylesheet , function(err, stdout, stderr) {
   
        console.log(stdout);
  });

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

    gulp.watch('_includes/sass/**/*.scss', ['compass']);

    gulp.watch(['*.html', '*/*.html', '*/*.md', '_includes/css/*.css', '!_site/**', '!_site/*/**'], ['jekyll']);

})

gulp.task('production', ['css', 'jekyll', 'watch']); 

gulp.task('dev', ['jekyll', 'watch']); 
