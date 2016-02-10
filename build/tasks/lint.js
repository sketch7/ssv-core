const gulp = require("gulp");
const tslint = require("gulp-tslint");
const stylish = require("gulp-tslint-stylish");

const paths = require("../paths");

gulp.task("lint", () => {
	gulp.src(paths.src.ts)
		.pipe(tslint())
		.pipe(tslint.report(stylish, {
			emitError: true,
			sort: true,
			bell: true,
			fullPath: true
		}));
});