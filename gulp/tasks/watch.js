var gulp = require('gulp') //creates variable
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); //browserSync localhost:3000


gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app" //base directory
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});