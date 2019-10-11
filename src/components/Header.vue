<!--
 * @Author: Chris
 * @Date: 2019-09-26 15:47:54
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 03:32:37
 * @Descripttion: **
 -->
<template>
    <el-header class="header" style="text-align: right; background: #fff">
      <el-dropdown>
        <!-- <span class="userName">{{userInfo.id}}</span> -->
        <span class="userName">15815564356</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <!-- <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
      <i class="el-icon-switch-button logout" @click="this.logout"></i>
    </el-header>
</template>
<script>
  import { mapMutations, mapState } from 'vuex';
  export default {
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      ...mapMutations(['LOGOUT']),
      logout(){
        // 可以发送请求，使用mapActions内发请求，或者此处直接发请求退出
        this.LOGOUT();
        this.$router.replace({
          name: 'login'
        })
      }
    }
  };
</script>
<style lang="less" scoped>
.header{
  height: 56px !important;
  .userName{
    height: 56px;
    font-size: 16px;
    line-height: 56px;
  }
  .logout{
    cursor: pointer;
  }
}
</style>