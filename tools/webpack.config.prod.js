/**
 * Created by raphael on 19/04/17.
 */

import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, '../src/index')
  ],
  target: "web",
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Minify JS
    new webpack.otimize.UglifyJsPlugin(),
    // Eliminate duplicate packages when generating bundle
    new webpack.otimize.DedupePlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
