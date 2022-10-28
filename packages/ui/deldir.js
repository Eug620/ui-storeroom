/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 14:39:53
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 14:40:03
 * @FilePath     : /rollup-ui-storeroom/packages/ui/deldir.js
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
const fs = require('fs')

function delDir(path){
  if(fs.existsSync(path)){
    fs.readdirSync(path).forEach((file, index) => {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()){
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

module.exports.delDir = delDir