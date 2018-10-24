const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const ssvTools = require("@ssv/tools");

const args = require("../args");
const config = require("../config");

require("./clean");
require("./lint");

ssvTools.registerGulpMultiTargetBuilds({
	taskName: "ts",
	action: compileTs,
	config: config
});

gulp.task("bundle:ts", () => ssvTools.rollup({ continueOnError: args.continueOnError }));

gulp.task("copy-dist", () => {
	return gulp.src(`${config.output.artifact}/**/*`)
		.pipe(gulp.dest(`${config.output.dist}`));
});

gulp.task("build", args.isRelease
	? gulp.series(
		gulp.parallel("lint", "compile:ts"),
		"copy-dist",
		"bundle:ts"
	)
	: gulp.series("lint", "compile:ts:dev")
)

gulp.task("rebuild", args.isRelease
	? gulp.series("clean", "build")
	: gulp.series("clean:artifact", "build")
)

gulp.task("ci", gulp.series("rebuild", "compile:test"));

// scripts - compile:ts | compile:ts:dev | compile:ts:TARGET
function compileTs(target) {
	return ssvTools.compileTsc({
		module: target,
		configPath: "./tsconfig.build.json",
		continueOnError: args.continueOnError
	});
	// const tsProject = tsc.createProject("tsconfig.json", {
	// 	typescript: require("typescript"),
	// 	module
	// 	// outFile: `${config.packageName}.js`
	// });
	// const tsResult = gulp.src([config.src.ts, `!${config.src.testTs}`])
	// 	.pipe(plumber())
	// 	//.pipe(changed(paths.output.dist, { extension: ".js" }))
	// 	.pipe(sourcemaps.init())
	// 	.pipe(tsProject());

	// return merge([
	// 	tsResult.js
	// 		.pipe(sourcemaps.write("."))
	// 		.pipe(gulp.dest(`${config.output.artifact}/${module}`)),
	// 	tsResult.dts
	// 		.pipe(gulp.dest(`${config.output.artifact}/typings`))
	// ]);
}