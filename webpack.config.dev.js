const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

	plugins: [
			new HtmlWebPackPlugin({
		      template: "./dist/index.html",
		      filename: "./index.html"
		    })
	],
	entry: [
		'./src/client/index.js',
		'webpack-hot-middleware/client'	
	],
	devtool: 'cheap-eval-source-map ',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, '/dist'),
		publicPath: "/"
	},
	module: {
		rules: [
					{
						test: /\.(js|jsx)$/,
						include: path.join(__dirname, '/src'),
						exclude: /(node_modules)/,
						use: [
					      {
					        loader: 'babel-loader',
					        options: {
					          presets: ['es2015', 'react']
					        }
					      }
					    ]
					},
					{
						test: /\.css$/,
						loader: ['style-loader', 'css-loader']
					},
					{
						test: /\.less$/,
						loader: ['style-loader', 'css-loader', 'less-loader']
					},
					{
						test: /\.scss$/,
						loader: ['style-loader', 'css-loader', 'sass-loader']
					},
					{
						test: /\.(png|svg|jpg|gif|jpeg)$/,
						use: 'file-loader'
					},
					{
						test: /\.(woff|woff2|eot|tff|otf|ttf)$/,
						loader: ['file-loader']
					}					
				]
	},

	resolve:{
		extensions: ['.js']
	}
}