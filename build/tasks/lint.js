const gulp = require("gulp");
const ssvTools = require("@ssv/tools");

const config = require("../config");

gulp.task("lint", ssvTools.lintTs);