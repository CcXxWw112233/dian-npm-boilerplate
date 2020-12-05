const { resolve } = require('path')

// 项目根目录
const projectPath = process.cwd()
// 代码地址目录

// 入口文件src目录
const srcPath = resolve(projectPath, 'src')

// 入口文件
const indexJsPath = resolve(srcPath, 'index.js')
const indexHtmlPath = resolve(srcPath, 'index.html')

const appJsPath = resolve(srcPath, 'app.js')

module.exports = {
  srcPath,
  indexJsPath,
  indexHtmlPath,
  appJsPath,
}
