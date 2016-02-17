var gulp = require("gulp");
var runSequence = require("run-sequence");
var conventionalChangelog = require("gulp-conventional-changelog");
var bump = require("gulp-bump");
var git = require("gulp-git");
var fs = require("fs");

var args = require("../args");
var paths = require("../paths");


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
		cb);
});


gulp.task("perform-release", (cb) => {
	return runSequence(
		"commit-changes",
		"push-changes",
		"create-new-tag",
		cb);
});


gulp.task("commit-changes", () => {
	return gulp.src(".")
		.pipe(git.add())
		.pipe(git.commit("[Prerelease] Bumped version number"));
});

gulp.task("push-changes", (cb) => {
	git.push("origin", "HEAD", cb);
});

gulp.task("create-new-tag", (cb) => {
	var version = getPackageJsonVersion();
	git.tag(version, `Created Tag for version: ${version}`, (error) => {
		if (error) {
			return cb(error);
		}
		git.push("origin", "HEAD", { args: "--tags" }, cb);
	});
});

function getPackageJsonVersion() {
	// We parse the json file instead of using require because require caches
	// multiple calls so the version number won't be updated
	return JSON.parse(fs.readFileSync("./package.json", "utf8")).version;
}