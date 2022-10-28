/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 14:39:32
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 14:39:42
 * @FilePath     : /rollup-ui-storeroom/packages/ui/rundeldir.js
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
const { delDir } = require('./deldir')
const path = require('path')

delDir(path.resolve(__dirname, './dist'))