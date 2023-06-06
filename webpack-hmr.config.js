const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');
const path = require('path');

//todo fix Error: Aborted because 147 is not accepted.
module.exports = function (options, webpack) {
	return {
		...options,
		entry: ['webpack/hot/poll?100', options.entry],
		externals: [
			nodeExternals({
				allowlist: ['webpack/hot/poll?100'],
			}),
		],
		plugins: [
			...options.plugins,
			new webpack.HotModuleReplacementPlugin(),
			new webpack.WatchIgnorePlugin({
				paths: [/\.js$/, /\.d\.ts$/],
			}),
			new RunScriptWebpackPlugin({
				name: options.output.filename,
				autoRestart: false,
			}),
		],
		resolve: {
			alias: {
				'@src': path.resolve('./src'),
			},
			extensions: ['.ts', '.js', '.d.ts'],
		},
	};
};
