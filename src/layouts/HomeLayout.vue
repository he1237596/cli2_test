<!--
 * @Author: Chris
 * @Date: 2019-09-26 11:17:25
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-28 12:05:22
 * @Descripttion: **
 -->
<template>
  <el-main class="page-box">
    <el-container class="main-box">
      <Aside />
      <el-container direction="vertical">
        <Header />
        <el-main style="heigt: 100%">
          <div class="content-box">
            <keep-alive>
              <!-- <transition name="fade"> -->
              <router-view />
              <!-- </transition> -->
            </keep-alive>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-main>
</template>
<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default {
  components: {
    Header,
    Aside
  }
};
</script>
<style lang="less" scoped>
.page-box{
  // height: 100%;
  .main-box{
    height: 100vh;
    .content-box{
      padding: 16px;
      height: calc(100% - 32px);
      overflow: hidden;
    }
  }
}

</style>