const path = require("path");
const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const srcRoot = "src";
const tsdMainFile = "typings/browser.d.ts";


module.exports = {
	output: {
		dist: `./dist`,
		artifact: `./_artifact`,
	},
	src: {
		root: srcRoot,
		typings: [tsdMainFile, "./jspm_packages/**/*.d.ts"],
		ts: `./${srcRoot}/**/*.ts`,
		testTs: `./${srcRoot}/**/*.spec.ts`,
		karmaConfig: `karma.conf.js`
	},
	doc: "./doc",
	packageName: pkg.name
};