const gulp = require("gulp");
const tslint = require("gulp-tslint");
const stylish = require("gulp-tslint-stylish");
const ssvTools = require("@ssv/tools");

const config = require("../config");

gulp.task("lint", ssvTools.lintTs);