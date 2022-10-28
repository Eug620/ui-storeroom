/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 15:44:07
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 20:09:11
 * @FilePath     : /ui-storeroom/packages/website/src/main.ts
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UI from 'ui'
// import 'ui/lib/theme-chalk/index.css'
const app = createApp(App)
app.use(UI)
app.mount('#app')
