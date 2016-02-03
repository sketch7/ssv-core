
var gulp = require("gulp");
var paths = require("./paths")

require('require-dir')('./tasks');

gulp.task("default", () => {

	console.log(`======== ${paths.packageName} ========`);
	

});