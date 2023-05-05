/*
 * @Author: HHG
 * @Date: 2023-02-09 10:34:44
 * @LastEditTime: 2023-04-25 09:51:17
 * @LastEditors: 韩宏广
 * @FilePath: \server\webpack.config.js
 * @文件说明: 
 */
const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// console.log(path.resolve(__dirname, 'src/'));
module.exports = {
  target: 'node18.12',
  target: 'node',
  node: {
    __dirname: true,
    global: true
  },
  devtool: 'inline-source-map',
  mode: "development", // "production" | "development" | "none"
  entry: './src/app.js',
  // // devServer: {
  // //   static: './dist/main.js',
  // // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: "commonjs"
    // clean: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    // new NodePolyfillPlugin()
  ]
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       // 排除 node_modules 和 bower_components 下的文件
  //       exclude: /(node_modules|bower_components)/,
  //       use: {}
  //     },
  //   ],
  // },
}

