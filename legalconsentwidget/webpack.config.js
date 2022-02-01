const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');


module.exports = {
    entry: './src/components/Bhnlegalconsent/Bhnlegalconsent.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
        library: 'LegalConsentWidget',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        libraryExport: 'default'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    /*plugins: [new webpack.DefinePlugin({
        // With dotenv (values must be stringified)
        ...Object.entries(dotenv.config().parsed).reduce((acc, curr) => ({...acc, [`${curr[0]}`]: JSON.stringify(curr[1]) }), {}),
        
        // Without dotenv 
        'myString': JSON.stringify('IAmAString')
    })],*/
    plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'REACT_APP_PACTSAFE_GROUP_KEY': JSON.stringify('clickwrap-example'),
                'REACT_APP_PACTSAFE_ACCESS_ID': JSON.stringify('1fb781f4-4c6b-42b9-b160-aecf5f8a169e'),

			},
			// 'process.env.ENV_VAR_BAR': JSON.stringify('bar'),
		}),
	],


    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
                exclude: /node_modules/
            },
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                     { 
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [ 'autoprefixer', {}, ],
                                ],
                            },
                        }
                      }
                ]
            }
        ]
    }
};
