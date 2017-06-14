var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: path.resolve('client.js'),
    output: {
      path: path.join(path.resolve(__dirname), 'public'),
      filename: 'client.js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader",
          })
        }
      ]
    },
    devtool: 'source-map',
    plugins: [
      new ExtractTextPlugin("styles.css")
    ]
  },
  {
    entry: path.resolve('server.js'),
    output: {
      path: path.join(path.resolve(__dirname), 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
     node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    externals: nodeExternals(),
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/,
        }
      ]
    }
  }
];
