<!--
 * @Author: Chris
 * @Date: 2019-09-28 09:48:11
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-28 09:52:56
 * @Descripttion: **
 -->
<template>
  <div class="main">
    <div class="main-left">
      <Toolbar title="角色" />
    </div>
    <div class="main-right">
      <Toolbar title="权限" />
    </div>
  </div>
</template>
<script>
export default {
  name: "rolePermission"
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  .main-left {
    width: 280px;
  }
  .main-right {
    flex: 1;
  }
}
</style>