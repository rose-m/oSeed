var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
    devtool: 'source-map',
    debug: true,

    entry: {
        app: path.resolve(APP_PATH, 'ts', 'entry'),
        styles: path.resolve(APP_PATH, 'styles')
    },
    target: 'atom',

    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        publicPath: 'build/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.scss', '.html']
    },

    plugins: [
        new ngAnnotatePlugin({
            add: true
        }),
        //new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: APP_PATH
        }, {
            test: /\.ts$/,
            loaders: ['babel', 'ts'],
            include: APP_PATH
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    }
};
