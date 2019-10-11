<!--
 * @Author: Chris
 * @Date: 2019-09-26 15:47:54
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 01:56:07
 * @Descripttion: **
 elem文档的默认选中为default-active，无法双向绑定，可以使用冒号+驼峰实现自动选中当前路由，或者使用$watch
 -->
<template>
  <el-aside width="216px" style="background: #545c64">
    <el-menu
      :defaultActive="$route.path"
      class="menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>租户管理</span>
        </template>
        <el-menu-item index="/enterpriseManage" :route="{ name: 'enterpriseManage', params: { title: '租户账号' }}">租户账号</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item index="2-1">软件订单</el-menu-item>
        <el-menu-item index="2-2">硬件订单</el-menu-item>
        <el-menu-item index="2-3">充值订单</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>云盒管理</span>
        </template>
        <el-menu-item index="3-1">Argus档案</el-menu-item>
        <el-menu-item index="3-2">云盒档案</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/userManage" :route="{ name: 'userManage' }">用户管理</el-menu-item>
        <el-menu-item index="/rolePermission" :route="{ name: 'rolePermission' }">角色与权限</el-menu-item>
        <el-menu-item index="4-3">配件档案</el-menu-item>
        <el-menu-item index="4-4">边缘程序管理</el-menu-item>
        <el-menu-item index="4-5">参数设置</el-menu-item>
        <el-menu-item index="4-6">我的信息</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>
<style lang="less" scoped>
.menu{
  border: none;
}
</style>