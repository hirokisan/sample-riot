var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [{
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/app/scripts',
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    preLoaders: [
    {
      test: /\.tag$/,
      exclude: /node_modules/,
      loader: 'riotjs-loader',
      query: {
        type: 'babel'
      }
    }
    ],
    loaders: [
    {
      test: /\.js$|\.tag$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    { test: /\.jade$/, loader: 'jade' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.tag']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ]
}, {
  entry: './src/sass/sample.scss',
  output: {
    path: __dirname + '/public/css',
    filename: 'main.css',
    publicPath: '/public/',
  },
  module: {
    loaders: [
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css")
  ]
}];

