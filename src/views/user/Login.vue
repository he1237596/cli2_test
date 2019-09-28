<!--
 * @Author: Chris
 * @Date: 2019-09-25 10:12:06
 * @LastEditors: Chris
 * @LastEditTime: 2019-09-26 11:06:15
 * @Descripttion: **
 -->
<template>
  <div class="main">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="密码" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!/^1\d{10}/.test(value)) {
          callback(new Error("手机号码格式错误"));
        }
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "15815564356",
        password: "111111"
      },
      rules: {
        userName: [
          // { required: true, message: '请输入密码', trigger: 'change' },
          { validator: validateUserName, trigger: "blur" }
        ],
        checkPassword: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          const { userName, password } = this.ruleForm;
          this.$api.user.login({ userName, password }).then(res => {
            console.log(res);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.main{
  width: 500px;
  height: 560px;
  background: #fff;
  border-radius: 8px;
}
</style>
