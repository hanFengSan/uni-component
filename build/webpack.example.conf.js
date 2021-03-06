var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        main: './example/main.js'
    },
    output: {
        filename: '[name]-[hash].js',
        path: resolve('example_build'),
        publicPath: '/example_build/',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('example'),
            resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': resolve('example'),
            'assets': resolve('example/assets'),
            'components': resolve('example/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('example')]
            }, {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            }, {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }]
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve('example/index.html')
        }),
        new FriendlyErrorsPlugin()
    ],
    devServer: {
        contentBase: '/',
        // publicPath: '/',
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 8300
    }
}
