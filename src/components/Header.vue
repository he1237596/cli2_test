<!--
 * @Author: Chris
 * @Date: 2019-09-26 15:47:54
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-27 12:14:06
 * @Descripttion: **
 -->
<template>
    <el-header class="header" style="text-align: right; background: #fff">
      <el-dropdown>
        <span class="userName">15815564356</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      
    </el-header>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.header{
  height: 56px !important;
  .userName{
    height: 56px;
    font-size: 16px;
    line-height: 56px;
  }
}
</style>