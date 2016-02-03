var gulp = require("gulp");
var runSeq = require("run-sequence");
var typescript = require("typescript");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var plumber = require("gulp-plumber");

var paths = require("../paths");

gulp.task("build", (cb) => {
	return runSeq(
		["compile:ts", "compile:sass", "html", "copy:imgs"],
		cb);
});

gulp.task("rebuild", (cb) => {
	return runSeq(
		"clean",
		"build",
		cb);
});

// scripts
gulp.task("compile:ts", () => {
	var tsProject = getTscProject();
	var tsResult = gulp.src([paths.src.tsd, paths.src.ts])
		.pipe(plumber())
	//.pipe(changed(paths.output.dist, { extension: ".js" }))
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(`${paths.output.dist}`))
});

function getTscProject() {
	return tsc.createProject("tsconfig.json", {
		sortOutput: true,
		typescript: typescript
	});
}