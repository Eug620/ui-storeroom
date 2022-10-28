/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 15:17:18
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 15:17:29
 * @FilePath     : /rollup-ui-storeroom/packages/ui/src/components/component.ts
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
 */
import { h, render } from 'vue'

const COMPONENT_CONTAINER_SYMBOL = Symbol('ui_component_container')

/**
 * 创建组件实例对象
 * 返回的实例和调用 getCurrentComponent() 返回的一致
 * @param {*} Component
 */
export function createComponent(Component, props, children) {
  const vnode = h(Component, { ...props }, children)
  const container = document.createElement('div')
  vnode[COMPONENT_CONTAINER_SYMBOL] = container
  render(vnode, container)
  return vnode.component
}

/**
 * 销毁组件实例对象
 * @param {*} ComponnetInstance 通过createComponent方法得到的组件实例对象
 */
export function unmountComponent(ComponnetInstance) {
  render(null, ComponnetInstance.vnode[COMPONENT_CONTAINER_SYMBOL])
}