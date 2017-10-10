const gulp = require("gulp");
const runSequence = require("run-sequence");
const conventionalChangelog = require("gulp-conventional-changelog");
const bump = require("gulp-bump");
const git = require("gulp-git");
const fs = require("fs");

const args = require("../args");

var publishBranch;
gulp.task("prepare-release", (cb) => {
	args.isRelease = true;
	return runSequence(
		"bump-version",
		"changelog",
		"commit-changes",
		"push-changes",
		cb);
});


// utils
// -------------

gulp.task("bump-version", () => {
	return gulp.src(["./package.json"])
		.pipe(bump({ type: args.bump, preid: args.versionSuffix })) //major|minor|patch|prerelease
		.pipe(gulp.dest("./"));
});

gulp.task("changelog", () => {
	return gulp.src(`./CHANGELOG.md`, {
		buffer: false
	})
		.pipe(conventionalChangelog({
			preset: "angular",
			releaseCount: 0
		}))
		.pipe(gulp.dest("."));
});

gulp.task("commit-changes", () => {
	const version = getPackageJsonVersion();
	return gulp.src(".")
		.pipe(git.add())
		.pipe(git.commit(`release(changelog): bumped version to \`${version}\` + updated changelog`));
});

gulp.task("push-changes", (cb) => {
	git.push("origin", publishBranch, cb);
});

function getPackageJsonVersion() {
	// We parse the json file instead of using require because require caches
	// multiple calls so the version number won't be updated
	return JSON.parse(fs.readFileSync("./package.json", "utf8")).version;
}