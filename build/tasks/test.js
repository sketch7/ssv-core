var config = require("../paths");
var gulp = require("gulp");
var gutil = require("gulp-util");
var Karma = require("karma").Server;
var path = require("path");

gulp.task("test", (cb) => {
	runTests(true, cb);
});

gulp.task("tdd", (cb) => {
	runTests(false, cb);
});

function runTests(singleRun, cb) {

	new Karma({
		configFile: path.join(__dirname, `../../${config.src.karmaConfig}`),
		singleRun: singleRun,
		autoWatch: !singleRun
	}, (code) => {

		// make sure failed karma tests cause gulp to exit non-zero
		if (code === 1) {
			gutil.log(gutil.colors.red("------- Error: unit test failed -------"));
			return process.exit(1);
		}
		cb();
	}).start();
}