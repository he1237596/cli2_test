<!--
 * @Author: Chris
 * @Date: 2019-09-25 02:22:29
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-26 18:20:13
 * @Descripttion: ''
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './style/common';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  .el-main{
    padding: 0;
  }
}
</style>
