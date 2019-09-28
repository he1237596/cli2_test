<!--
 * @Author: Chris
 * @Date: 2019-09-26 17:37:34
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-28 12:09:40
 * @Descripttion: **
 -->
<template>
  <div class="toolbar">
    <span v-text="title"></span>
    <div class="btn-wrap" v-if="btns.length>0">
      <el-button
        v-for="(item, index) in btnItems"
        :key="index"
        class="btn"
        type="text"
        @click="item.onClick"
      >{{ item.name }}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    btns: {
      type: Array,
      default: () => []
    },
    border: false
  },
  data() {
    return {};
  },
  computed: {
    btnItems() {
      return this.btns.map(item => {
        if (!item.onClick) {
          item.onClick = () => {};
        } else if (item.onClick && typeof item.onClick !== "function") {
          console.error("请检查按钮绑定事件是否为Function！");
          item.onClick = () => {};
        }
        return item;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.toolbar {
  .btn-wrap {
    float: right;
    .btn {
      padding: 3px 0;
    }
  }
}
</style>