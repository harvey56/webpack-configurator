var webpack = require('webpack');
var webpackConfig = require('../../../webpack.config.dev.js');
var compiler = webpack(webpackConfig);

export default (app) => {
	app.use(require("webpack-dev-middleware")(compiler, {
    	noInfo: true, publicPath: webpackConfig.output.publicPath
	}));

	app.use(require("webpack-hot-middleware")(compiler));
}
	
