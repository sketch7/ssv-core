const gulp = require("gulp");
const runSeq = require("run-sequence");
const tsc = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");

const paths = require("../paths");

gulp.task("build", (cb) => {
	return runSeq(
		["compile:ts"],
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
	const tsProject = getTscProject();
	const tsResult = gulp.src([paths.src.tsd, paths.src.ts])
		.pipe(plumber())
	//.pipe(changed(paths.output.dist, { extension: ".js" }))
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return tsResult.js
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(`${paths.output.artifact}`))
});

function getTscProject() {
	return tsc.createProject("tsconfig.json", {
		typescript: require("typescript")
	});
}