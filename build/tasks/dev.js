const gulp = require("gulp");
const util = require("gulp-util");

const paths = require("../paths");

gulp.task("watch", () => {

	// ts
	gulp.watch(paths.src.ts, ["compile:ts"])
		.on("change", reportChange)
		.on("error", swallowError);
		
});

function reportChange(event) {
	console.log(`File ${event.path} was ${event.type}, running tasks...`);
}

function swallowError(error) {
	console.log(util.colors.red(`Error occurred while running watched task...`));
}