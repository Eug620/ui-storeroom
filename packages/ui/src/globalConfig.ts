/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 15:16:28
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 15:16:36
 * @FilePath     : /rollup-ui-storeroom/packages/ui/src/globalConfig.ts
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
import { getCurrentInstance } from 'vue'

/**
 * get globalOptions KDUI config object
 */
export function useGlobalOptions() {
  const instance = getCurrentInstance()

  if (!instance) {
    console.warn('useGlobalOptions must be call in setup function')
    return
  }

  return instance.appContext.config.globalProperties.$KDUI || {}
}

export function setupGlobalOptions(opts: any = {}) {
  return (app) => {
    app.config.globalProperties.$KDUI = {
      size: opts.size || '',
      zIndex: opts.zIndex || 2000
    }
  }
}