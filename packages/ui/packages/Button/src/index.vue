<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 14:59:23
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 15:48:20
 * @FilePath     : /rollup-ui-storeroom/packages/ui/packages/Button/src/index.vue
 * @Description  : filename
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
-->
<template>
  <div class="ui-button">button: {{ msg }}</div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    msg: String,
  },
  setup() {},
});
</script>