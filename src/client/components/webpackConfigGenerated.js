
export const cssLoader = 
			`
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			`

export const lessLoader =
			`
			{
				test: /\.less$/,
				loader: ['style-loader', 'css-loader', 'less-loader']
			},
			`

export const sassLoader = 
			`
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader']
			},
			`

export const imagesLoader = 
			`
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/,
				use: 'file-loader'
			},
			`

export const fontsLoader = 
			`
			{
				test: /\.(woff|woff2|eot|tff|otf|ttf)$/,
				loader: ['file-loader']
			},
			`

export const jsLoader = 
			`
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
			`