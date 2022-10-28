/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 15:04:14
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 15:04:44
 * @FilePath     : /rollup-ui-storeroom/packages/ui/scripts/generateCssFile.js
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { delDir } = require('../deldir')

const componentPath = path.resolve(__dirname, '../packages')
const themePath = path.resolve(__dirname, '../', 'theme-chalk/src')
const fileSuffix = '.scss'
const indexFileName = 'index' + fileSuffix
const outputIndexFilePath = path.resolve(themePath, indexFileName)

const excludes = ['README.md', 'JsonDialog']

;(function main() {
  delDir(path.resolve(__dirname, '../theme-chalk/lib'))
  delDir(path.resolve(__dirname, '../lib'))
  save(genCssCode(getAllComponentName()))
})()

function getAllComponentName() {

  return fs.readdirSync(componentPath).filter(file => {
    return !excludes.includes(file)
  })

}

function genCssCode(componentNameList) {
  var indexContent = '@import "./base.scss";\n'

  return componentNameList.reduce((context, filePath) => {
    return (context += '@import "./' + filePath + fileSuffix + '";\n')
  }, indexContent)
}

function save(cssCode) {
  fs.writeFileSync(outputIndexFilePath, cssCode)
}