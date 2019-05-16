/* global __dirname, require, module*/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'mini-iframe-rpc';

let outputFile, mode;

if (env === 'production') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development';
  outputFile = libraryName + (env === 'development' ? '.js' : '-[name].js');
}

const config = {
  mode: mode,
  entry: __dirname + '/src/' + libraryName + '.ts',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader']
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.tsx', '.ts']
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        parse: {},
        compress: {},
        mangle: true, // Note `mangle.properties` is `false` by default.
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_fnames: false,
      },
      sourceMap: true
    })]
  }
};
module.exports = config;
