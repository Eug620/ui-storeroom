<!--
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-10-28 15:44:07
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2022-10-28 20:10:08
 * @FilePath     : /ui-storeroom/packages/website/src/App.vue
 * @Description  : filename 
 * 
 * Copyright (c) 2022 by eug yyh3531@163.com, All Rights Reserved. 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { CalculateFontSize } from "e-tools";
import { onMounted } from "vue";

onMounted(() => {
  CalculateFontSize({ vw: 1440, size: 20 });
});
</script>

<template>
  <div class="website-container">
    <h2>UI</h2>
    <Button msg="WTF"></Button>
    <div class="title">WWW</div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
