const gulp = require("gulp");
const ssvTools = require("@ssv/tools");

const args = require("../args");
const config = require("../config");

require("./clean");
require("./lint");
require("./prepare-release");

ssvTools.registerGulpMultiTargetBuilds({
	taskName: "ts",
	action: compileTs,
	config: config
});

gulp.task("bundle:ts", () => ssvTools.rollup({ continueOnError: args.continueOnError, useTypeScriptConfig: true }));

gulp.task("build", args.isRelease
	? gulp.series(
		gulp.parallel("lint", "compile:ts", "prepublish"),
		"bundle:ts"
	)
	: gulp.parallel("lint", "prepublish", "compile:ts:dev")
)

gulp.task("rebuild", gulp.series("clean", "build"))

gulp.task("ci", gulp.series("rebuild", "compile:test"));

// scripts - compile:ts | compile:ts:dev | compile:ts:TARGET
function compileTs(target) {
	return ssvTools.compileTsc({
		module: target,
		configPath: "./tsconfig.build.json",
		continueOnError: args.continueOnError
	});
}