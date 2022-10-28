/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 14:58:55
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 15:15:44
 * @FilePath     : /rollup-ui-storeroom/packages/ui/packages/Button/index.ts
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
import Button from './src/index.vue'

/* istanbul ignore next */
Button.install = function (app: any) {
  app.component(Button.name, Button)
}

export { Button }