var gulp         = require('gulp');
var compass      = require('gulp-compass');
var cssmin       = require('gulp-cssmin');
var spawn        = require('child_process').spawn;
var rename       = require('gulp-rename');
var clean        = require('gulp-clean');
var exec         = require('child_process').exec;
var findAllFiles = require('glob');
var browserSync  = require('browser-sync');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


gulp.task('browser-sync', ['compass','jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('compass', function() {

  findAllFiles('_includes/stylesheets/**/!(_)*.scss',{}, function (error, files) {
      var stylesheets = files.join(' ');
      console.log("Compiling Sass: " + stylesheets);
      exec('bundle exec compass compile ' + stylesheets , function(err, stdout, stderr) {
            console.log(stdout);
      });
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

gulp.task('css', ['minify-css']); 

// Watch for changes
gulp.task('watch', function () {

    gulp.watch('_includes/stylesheets/**/*.scss', ['compass']);

    gulp.watch(['_data/*.yml', '*.html', '*/*.html','**/**/*.html', '*/*.md', './css/*.css', '!_site/**', '!_site/*/**'], ['jekyll-rebuild']);

})

gulp.task('production', ['css', 'jekyll', 'watch']); 

gulp.task('dev', ['browser-sync', 'watch']); 
