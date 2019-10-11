<!--
 * @Author: Chris
 * @Date: 2019-10-06 17:29:17
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 22:51:01
 * @Descripttion: **
 -->

<template>
  <el-dialog title="新增" :visible.sync="visible" :before-close="handleClose" top="5vh" width="560px" >
    <el-form :model="form" class="form" ref="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" :label-width="formLabelWidth">
        <el-input v-model="form.mobile" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门" :label-width="formLabelWidth">
        <el-input v-model="form.department" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色" :label-width="formLabelWidth">
        <el-input v-model="form.roleName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth">
        <el-select v-model="form.enable" placeholder="请选择活动区域">
          <el-option label="启用" value="false"></el-option>
          <el-option label="禁用" value="true"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth">
        <el-input v-model="form.remark" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="图像" :label-width="formLabelWidth">

      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleSubmit('form')">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "Form",
  props: ["dialogFormVisible"],
  data() {
    return {
      // dialogFormVisible: true,
      form: {
        name: "",
        mobile: "",
        department: "",
        roleName: "",
        enable: 'false',
        remark: '',
      },
      formLabelWidth: "80px"
    };
  },
  computed: {
    visible(){
      return this.dialogFormVisible;
    }
  },
  methods: {
    handleClose(){
      this.$emit('toggleModal');
    },
    handleSubmit(formName){
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.form);
          // const { userName, password } = this.ruleForm;
          // this.$api.user.login({ userName, password }).then(res => {
          //   const { data, code, msg } = res;
          //   if (code === 200) {
          //     sessionStorage.setItem("userInfo", JSON.stringify(data));
          //     this.LOGIN(data);
          //     const { query } = this.$route;
          //     if (query.redirect) {
          //       this.$router.push(query.redirect);
          //     } else {
          //       this.$router.push("/");
          //     }
          //   } else {
          //     this.$message.error(msg);
          //   }
          // });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.form{
  padding-right: 20px;
  width: 340px;
  margin: 0 auto;
  /deep/ .el-select{
    width: 240px;
  }
  /deep/ .el-input{
    width: 240px;
  }
}
</style>