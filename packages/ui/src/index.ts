/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 15:14:54
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 15:16:08
 * @FilePath     : /rollup-ui-storeroom/packages/ui/src/index.ts
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
// Basic
import { Button } from '../packages/Button/index'


import { version } from '../package.json'
import { setupGlobalOptions } from './globalConfig'

const components = [
  Button
]

const install = (app: any, opts = {}) => {
  app.use(setupGlobalOptions(opts))

  components.forEach((component) => {
    app.use(component)
  })

  applyOptions(app)
}

function applyOptions(app: any) {
//   app.config.globalProperties.$JsonDialog = JsonDialog
}

const ui = {
  version,
  install
}

export {
  Button,
  install
}

export default ui