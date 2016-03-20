var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
    devtool: 'source-map',
    debug: true,

    entry: {
        components: ['font-awesome-loader', 'bootstrap-loader'],
        app: path.resolve(APP_PATH, 'components', 'entry')
    },
    target: 'electron',

    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        publicPath: 'build/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.scss', '.html'],
        alias: {
            jquery: path.resolve(ROOT_PATH, 'bower_components/jquery/dist/jquery.js')
        }
    },

    plugins: [
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
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
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10000"
        }, {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            loader: 'file'
        }, {
            test: /\.ng\.html$/,
            loaders: ['ngtemplate', 'html']
        }]
    }
};
