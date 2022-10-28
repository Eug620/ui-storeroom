/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 15:05:22
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 15:05:35
 * @FilePath     : /rollup-ui-storeroom/packages/ui/theme-chalk/gulpfile.js
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
'use strict'

const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['ie > 9', 'last 2 versions'],
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

function copyfont() {
  return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)