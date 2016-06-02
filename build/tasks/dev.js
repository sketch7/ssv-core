const gulp = require("gulp");
const util = require("gulp-util");
const runSeq = require("run-sequence");

const args = require("../args");
const paths = require("../paths");

gulp.task("watch", () => {
	if (args.isRelease) {
		// ts
		gulp.watch(paths.src.ts, () => {
			return runSeq(
				"compile:ts",
				"copy-dist"
			);
		}).on("change", reportChange)
			.on("error", swallowError);
	} else {
		// ts
		gulp.watch(paths.src.ts, ["compile:ts"])
			.on("change", reportChange)
			.on("error", swallowError);
	}
});

function reportChange(event) {
	console.log(`File ${event.path} was ${event.type}, running tasks...`);
}

function swallowError(error) {
	console.log(util.colors.red(`Error occurred while running watched task...`));
}