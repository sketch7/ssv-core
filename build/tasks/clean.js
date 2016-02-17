const gulp = require("gulp");
const del = require("del");

const paths = require("../paths");

gulp.task("clean", () => {
	return del(paths.output.artifact);
});