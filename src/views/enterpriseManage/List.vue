<!--
 * @Author: Chris
 * @Date: 2019-09-26 17:05:55
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-27 19:33:14
 * @Descripttion: **
 -->
<template>
  <el-card class="box-card">
    <!-- <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>-->
    <div slot="header">
      <Toolbar v-bind="toolbar" />
    </div>
    <div class="table-list">
      <TableList />
    </div>
  </el-card>
</template>
<script>
import TableList from "@/components/TableList";
const cellSole = {
  
}

export default {
  components: {
    TableList
  },
  data() {
    return {
      toolbar: {
        title: "租户账号",
        btns: [
          {
            name: "新增",
            onClick() {
              alert(0)
            }
          },
          {
            name: "编辑",
            onClick() {}
          },
          {
            name: "删除",
            onClick() {}
          }
        ]
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },

  created() {
    console.log(this.$route.params.title);
  }
};
</script>
<style lang="less" scoped>
.box-card {
  height: 100%;
  border: none; //否则框架内置的1px样式会导致横向样式错位1px
  .table-list{
    height: calc(100% - 53px);
  }
}
</style>
