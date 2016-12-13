export default {
	entry: "./dist/es2015/index.js",
	dest: "./dist/bundles/ssv-core.umd.js",
	format: "umd",
	moduleName: "ssv.core",
	globals: {
		"lodash": "lodash"
	},
	external: [
		"lodash"
	]
}