var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.jsx'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
        /*query: {
          presets: ['es2015', 'stage-0', 'react']
        }*/
      },

      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}