const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./webpack/index.js",
  output: {
    path: path.resolve(__dirname, 'src/assets/'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
