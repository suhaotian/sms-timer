var gulp = require('gulp')
var sync = require('browser-sync')
var umd = require('gulp-umd')
var minJs = require('gulp-uglify')

gulp.task('server', function () {
	sync.init({
		server: {
			baseDir: './'
		}
	})
})

gulp.task('build', function () {
	gulp.src('./index.js')
		.pipe(umd({
			exports: function (file) {
				return 'sms'
			},
			namespace: function (file) {
				return 'sms'
			}
		}))
		.pipe(minJs())
		.pipe(gulp.dest('./dist'))
})