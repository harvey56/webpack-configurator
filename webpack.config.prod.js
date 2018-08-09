const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

	plugins: [
		    new MiniCssExtractPlugin({
		      filename: "[name].css",
		      chunkFilename: "[id].css"
		    }),
		    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
		    new UglifyJSPlugin(),
		    new HtmlWebPackPlugin({
		      template: "./src/index.html",
		      filename: "./index.html"
		    })
	],
	entry: [
		path.join(__dirname, '/src/client/index.js')
	],
	devServer: {
		contentBase: './dist',
	},
	target: 'web',
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, '/dist'),
		publicPath: "/"
	},
	module: {
		rules: [
					{
						test: /\.(js|jsx)$/,
						include: path.join(__dirname, '/src'),
						exclude: /(node_modules)/,
						loader: ['babel-loader']
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
						loader: 'url-loader'
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
