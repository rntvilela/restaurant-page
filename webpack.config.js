const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './img/', 
						},
					},
				],
			},
			{
				test: /\.html$/i,
				use: ['html-loader'],
			},
		],
	},

};
