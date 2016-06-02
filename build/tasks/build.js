const gulp = require("gulp");
const runSeq = require("run-sequence");
const tsc = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const merge = require("merge2");

const args = require("../args");
const paths = require("../paths");

gulp.task("build", (cb) => {
	if (args.isRelease) {
		return runSeq(
			["lint", "compile:ts"],
			"copy-dist",
			cb);
	}
	return runSeq(
		["lint", "compile:ts"],
		cb);
});

gulp.task("rebuild", (cb) => {
	if (args.isRelease) {
		return runSeq(
			"clean",
			"build",
			"copy-dist",
			cb);
	}
	return runSeq(
		"clean:artifact",
		"build",
		cb);
});

gulp.task("ci", (cb) => {
	return runSeq(
		"rebuild",
		"test",
		cb);
});

// scripts
gulp.task("compile:ts", () => {
	const tsProject = getTscProject();
	const tsResult = gulp.src([...paths.src.typings, paths.src.ts, `!${paths.src.testTs}`])
		.pipe(plumber())
		//.pipe(changed(paths.output.dist, { extension: ".js" }))
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return merge([
		tsResult.js
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest(`${paths.output.artifact}/amd`)),
		tsResult.dts
			.pipe(gulp.dest(`${paths.output.artifact}/typings`))
	]);
});

gulp.task("copy-dist", () => {
	return gulp.src(`${paths.output.artifact}/**/*`)
		.pipe(gulp.dest(`${paths.output.dist}`));
});

function getTscProject() {
	return tsc.createProject("tsconfig.json", {
		typescript: require("typescript")
		//outFile: `${paths.packageName}.js`
	});
}