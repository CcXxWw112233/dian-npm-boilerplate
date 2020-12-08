const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { indexJsPath, indexHtmlPath } = require('./file.path.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // 入口文件
  entry: [
    'babel-polyfill', //react regeneratorRuntime is not defined
    'react-hot-loader/patch',
    indexJsPath,
  ],
  // 输入配置
  output: {
    publicPath: '/', // 配置该项热重载react-hot-loader才会生效
  },
  devServer: {
    port: 9000,
    host: 'localhost',
    overlay: {
      errors: true, //编译过程中如果有任何错误，都会显示到页面上
    },
    open: true, // 自动帮你打开浏览器
    hot: true, // 热重载
    // historyApiFallback: true, //BrowserRouter模式下刷新报错
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    // 生成HTML文件
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: indexHtmlPath,
    }),
  ],
})
