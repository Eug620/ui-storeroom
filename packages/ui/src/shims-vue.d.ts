/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 15:16:45
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 15:16:50
 * @FilePath     : /rollup-ui-storeroom/packages/ui/src/shims-vue.d.ts
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}