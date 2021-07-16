const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '..', 'build'),
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'build'),
    open: true,
    hot: true,
    port: 9000,
    clientLogLevel: 'error'
  },
  optimization: {
    usedExports: true
  },
  stats: 'errors-warnings',
  plugins: [
    new VueLoaderPlugin(),
    new ESLintPlugin({
      extensions: [ 'js','vue' ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      title: 'Vue Create App'
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  resolve: {
    modules: [ path.resolve(__dirname, './src'), 'node_modules' ],
    extensions: [ '.js', '.vue', '.json', '.tsx', '.ts' ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  devtool: 'eval',
};
