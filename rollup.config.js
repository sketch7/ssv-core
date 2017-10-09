export default {
	input: "./dist/es2015/index.js",
	output: {
		file: "./dist/bundles/ssv-core.umd.js",
		format: "umd",
		name: "ssv.core",
		globals: {
			"lodash": "lodash"
		}
	},
	external: [
		"lodash"
	]
}