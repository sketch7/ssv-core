const gulp = require("gulp");
const del = require("del");

const paths = require("../paths");

gulp.task("clean", ["clean:artifact", "clean:dist"]);

gulp.task("clean:artifact", () => {
	return del(paths.output.artifact);
});

gulp.task("clean:dist", () => {
	return del(paths.output.dist);
});