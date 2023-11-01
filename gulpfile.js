var  project    = require('./package.json');
var gulp = require('gulp');
var checktextdomain = require('gulp-checktextdomain');
wpPot           = require('gulp-wp-pot'),
clean           = require('gulp-clean'),
zip             = require('gulp-zip');

gulp.task('text-domain', function() {
	return gulp
	.src('**/*.php')
	.pipe(checktextdomain({
		text_domain: project.name, //Specify allowed domain(s)
		keywords: [ //List keyword specifications
			'__:1,2d',
			'_e:1,2d',
			'_x:1,2c,3d',
			'esc_html__:1,2d',
			'esc_html_e:1,2d',
			'esc_html_x:1,2c,3d',
			'esc_attr__:1,2d',
			'esc_attr_e:1,2d',
			'esc_attr_x:1,2c,3d',
			'_ex:1,2c,3d',
			'_n:1,2,4d',
			'_nx:1,2,4c,5d',
			'_n_noop:1,2,3d',
			'_nx_noop:1,2,3c,4d'
		],
		correct_domain: true,
	}));
});

gulp.task('pot', function () {
	return gulp.src(['**/*.php', '!__*/**', '!assets/**'])
	.pipe(wpPot( {
		domain: project.name,
		bugReport: 'support@sovware.com',
		team: 'sovware <support@sovware.com>'
	} ))
	.pipe(gulp.dest('languages/'+project.name+'.pot'));
});

gulp.task('clean', function () {
	return gulp.src('__build/*.*', {read: false})
	.pipe(clean());
});

gulp.task('zip', function () {
	return gulp.src(['**', '!__*/**', '!node_modules/**', '!gulpfile.js', '!Gruntfile.js', '!.DS_Store', '!package.json', '!package-lock.json', '!todo.txt', '!sftp-config.json', '!testing.html'], { base: '..' })
	.pipe(zip(project.name+'.zip'))
	.pipe(gulp.dest('__build'));
});

gulp.task('build', gulp.series('text-domain','pot','clean','zip'));