var gulp = require("gulp");
var runSequence = require("run-sequence");
var paths = require("../paths");
var conventionalChangelog = require("gulp-conventional-changelog");
var bump = require("gulp-bump");
var args = require("../args");

gulp.task("bump-version", () => {
	return gulp.src(["./package.json"])
		.pipe(bump({ type: args.bump })) //major|minor|patch|prerelease
		.pipe(gulp.dest("./"));
});

gulp.task("changelog", () => {
	return gulp.src(`${paths.doc}/CHANGELOG.md`, {
		buffer: false
	})
		.pipe(conventionalChangelog({
			preset: "angular",
			releaseCount: 0
		}))
		.pipe(gulp.dest(`${paths.doc}`));
});

gulp.task("prepare-release", (cb) => {
	return runSequence(
		"lint",
		"rebuild",
		"test",
		"copy-dist",
		"bump-version",
	//"doc",
		"changelog",
		cb
		);
});