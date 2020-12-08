const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { appJsPath, srcPath } = require('./file.path.js')
const { resolve } = require('path')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    index: ['babel-polyfill', appJsPath],
  },
  output: {
    publicPath: './',
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, //可以打包出一个单独的css文件
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]_[local]_[hash:5]',
              },
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        exclude: /\/node_modules/, //不包含哪些文件
        // //允许过滤哪些块应该被uglified（默认情况下，所有块都是uglified）。
        // //返回true以uglify块，否则返回false。
        // chunkFilter: (chunk) => {
        //     // `vendor` 模块不压缩
        //     if (chunk.name === 'vendor') {
        //         return false;
        //     }
        //     return true;
        // },
        cache: false, //是否启用文件缓存，默认缓存在node_modules/.cache/uglifyjs-webpack-plugin.目录
        parallel: true, //使用多进程并行运行来提高构建速度
        sourceMap: true,
      }),
    ],
    splitChunks: {
      name: 'common',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve(srcPath, './static'),
        to: 'static',
        ignore: ['.*'],
      },
    ]),
  ],
})
