const gulp = require("gulp");
const paths = require("./paths");

require("require-dir")("./tasks");

gulp.task("default", () => {

	console.log(`======== ${paths.packageName} ========`);

});