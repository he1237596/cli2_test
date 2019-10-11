<!--
 * @Author: Chris
 * @Date: 2019-09-26 17:05:55
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 22:05:50
 * @Descripttion: **
 -->
<template>
  <div class="box-card">
    <!-- <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>-->
    <!-- <el-card>
      <div slot="header">
        
      </div>
    </el-card> -->
    <div class="toolbar-wrap">

    <Toolbar v-bind="toolbar" />
    </div>
    <div class="table-list">
      <el-table :data="tableData" style="width: 100%;" height="100%">
        <el-table-column fixed prop="mobile" label="手机号" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="department" label="部门" width="200"></el-table-column>
        <el-table-column prop="roleName" label="角色" width="120"></el-table-column>
        <el-table-column prop="createDate" label="创建时间" width="150"></el-table-column>
        <el-table-column prop="enable" label="状态" width="120">
          <template slot-scope="scope">{{!scope.enable? '启用' : '禁用'}}</template>
          <!-- {{scope.enable? '启用' : '禁用'}} -->
        </el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >删除</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="params.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </div>
    <Form :dialogFormVisible="dialogFormVisible" @toggleModal="this.toggleModal" />
  </div>
</template>
<script>
// import TableList from "@/components/TableList";
import Form from "./Form";

export default {
  components:{
    Form
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.params.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.params.page = val;
      this.getList();
    },
    getList() {
      this.$api.userManage
        .getList({
          page: this.params.page,
          pageSize: this.params.pageSize,
          filters: this.filter
        })
        .then(({ list = [], total = 0 }) => {
          this.tableData = list;
          this.total = total;
        });
    },
    toggleModal(){
    this.dialogFormVisible = !this.dialogFormVisible;
    }
  },
  data() {
    // const toggle = this.dialogFormVisible;
    const that = this;
    return {
      // currentPage: 4,
      dialogFormVisible: false,
      total: 0,
      toolbar: {
        title: "用户管理",
        btns: [
          {
            name: "新增",
            onClick() {
              that.toggleModal();
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
      tableData: [],
      params: {
        page: 1,
        pageSize: 10
      },
      filters: {}
    };
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="less" scoped>
.box-card {
  height: 100%;
  background: #fff;
  border: none; //否则框架内置的1px样式会导致横向样式错位1px
  // /deep/ .el-card__body {
  //   height: calc(100% - 93px);
  // }
  .toolbar-wrap{

  }
  .table-list {
    height: calc(100% - 96px);
    padding: 0 16px;
  }
  .pagination {
    padding: 8px 0;
    text-align: left;
  }
}
</style>
