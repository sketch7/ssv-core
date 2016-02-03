var gulp = require("gulp");
var runSequence = require("run-sequence");
var paths = require("../paths");
var changelog = require("conventional-changelog");
var fs = require("fs");
var bump = require("gulp-bump");
var args = require("../args");

gulp.task("bump-version", () => {
	return gulp.src(["./package.json"])
		.pipe(bump({ type: args.bump })) //major|minor|patch|prerelease
		.pipe(gulp.dest("./"));
});

gulp.task("changelog", (callback) => {
	var pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

	return changelog({
		repository: pkg.repository.url,
		version: pkg.version,
		file: `${paths.doc}/CHANGELOG.md`
	}, (err, log) => {
		fs.writeFileSync(`${paths.doc}/CHANGELOG.md`, log);
	});
});

gulp.task("prepare-release", (cb) => {
	return runSequence(
		"lint",
		"rebuild",
	//"test",
	//"copy-dist",
		"bump-version",
	//"doc",
		"changelog",
		cb
		);
});