var yargs = require("yargs");

var argv = yargs
	.alias("rel", "release")
	.default("rel", false)

	.choices("bump", ["major", "minor", "patch", "prerelease"])
	.default("bump", "patch")

	.default("versionSuffix", "rc")

	.argv;

module.exports = {
	bump: argv.bump,
	versionSuffix: argv.versionSuffix,
	isRelease: argv.rel
};