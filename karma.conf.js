module.exports = function (config) {
	config.set({
		basePath: "./",
		frameworks: ["systemjs", "jasmine"],

		systemjs: {
			configFile: "system.config.js",
			config: {
				paths: {
					"*": "*",
					"src/*": "src/*",
					"typescript": "node_modules/typescript/lib/typescript.js",
					"systemjs": "node_modules/systemjs/dist/system.js",
					"system-polyfills": "node_modules/systemjs/dist/system-polyfills.js",
					"es6-module-loader": "node_modules/es6-module-loader/dist/es6-module-loader.js"
				},
				packages: {
					"src": {
						defaultExtension: "ts"
					}
				},
				transpiler: "typescript"
			},
			serveFiles: [
				"src/**/*.ts",
				"jspm_packages/**/*.js"
			]
		},
		files: [
			"src/**/*.spec.ts",
			"src/*.spec.ts"
		],
		exclude: [],
		preprocessors: {},
		reporters: ["mocha", "appveyor"],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ["Chrome"],
		singleRun: false
	});
};