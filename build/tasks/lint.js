var gulp = require("gulp");
var tslint = require("gulp-tslint");
var stylish = require("gulp-tslint-stylish");

var paths = require("../paths");

gulp.task("lint", () => {
	gulp.src(paths.src.ts)
		.pipe(tslint())
		.pipe(tslint.report(stylish, {
			emitError: false,
			sort: true,
			bell: true,
			fullPath: true
		}))
})