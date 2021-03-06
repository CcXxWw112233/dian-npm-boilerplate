const webpack = require('webpack')
const { srcPath } = require('./file.path.js')
var path = require('path')

module.exports = {
  // 基础目录（绝对路径），用于从配置中解析入口点和加载程序
  // 默认使用当前目录，但建议在配置中传递一个值。这使得您的配置独立于CWD（当前工作目录）
  context: srcPath,

  resolve: {
    //配置别名，在项目中可缩减引用路径
    alias: {
      src: path.resolve('src'),
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
  // 模块配置
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        // ts-loader是官方提供的处理tsx的文件
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  // 插件配置
  plugins: [
    // 开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    // 热加载中可以输入更加友好的模块名
    new webpack.NamedModulesPlugin(),
    //解决函数组件没 import React from 'react'报错
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
