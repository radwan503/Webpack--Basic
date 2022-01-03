const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: 'development',  //production
  entry: {
    main: path.resolve(__dirname, 'src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',   // for unique name build over over 
    // filename:'[name].bundle.js',        //indicate entry main
    clean: true

  },
  devtool: 'inline-source-map',

  // devServer: {
  //   static: path.resolve(__dirname, 'dist'),
  //   port: 5001,  //default 8080
  //   open: true,
  //   hot: true,
  //   watchContentBase: true,
  // },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: "only",
  },
  //loaders--different file types
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|jpeg|png)$/, type: 'asset/resource' }
    ]
  },

  //plugin
  plugins: [
    new HtmlWebpackPlugin({
      title: 'just a demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html')

    }),
  ],

}