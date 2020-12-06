const { resolve } = require('path')

// 项目根目录
const projectPath = process.cwd()
// 代码地址目录

// 入口文件src目录
const examplePath = resolve(projectPath, 'example')
const srcPath = resolve(projectPath, 'src')

// 入口文件
const indexJsPath = resolve(examplePath, 'index.tsx')
const indexHtmlPath = resolve(examplePath, 'index.html')

const appJsPath = resolve(srcPath, 'index.tsx')

module.exports = {
  srcPath,
  indexJsPath,
  indexHtmlPath,
  appJsPath,
}
