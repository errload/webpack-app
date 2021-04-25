const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
}

module.exports = {
    entry: {
        'index': PATHS.source + '/pages/index/index.js',
        'about': PATHS.source + '/pages/about/about.js',
        'contacts': PATHS.source + '/pages/contacts/contacts.js'
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'aboutme.html',
            chunks: ['about'],
            template: PATHS.source + '/pages/about/about.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            chunks: ['contacts'],
            template: PATHS.source + '/pages/contacts/contacts.pug'
        }),
        new MiniCssExtractPlugin({filename: './css/[name].css'}),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: {removeAll: true} }
        }),
        new UglifyJsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
