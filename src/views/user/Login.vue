<!--
 * @Author: Chris
 * @Date: 2019-09-25 10:12:06
 * @LastEditors: Chris
 * @LastEditTime: 2019-10-06 17:14:50
 * @Descripttion: **
 -->
<template>
  <div class="main">
    <h1>云智控后台管理系统</h1>
    <div class="form-wrap">
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
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "Login",
  created() {
    console.log(this.$route);
  },
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
      this.$refs[formName].validate(async valid => {
        if (valid) {
          console.log(this.ruleForm);
          const { userName, password } = this.ruleForm;
          this.$api.user.login({ userName, password }).then(res => {
            const { data, code, msg } = res;
            if (code === 200) {
              sessionStorage.setItem("userInfo", JSON.stringify(data));
              this.LOGIN(data);
              const { query } = this.$route;
              if (query.redirect) {
                this.$router.push(query.redirect);
              } else {
                this.$router.push("/");
              }
            } else {
              // this.$message({
              //   message: msg,
              //   type: "error"
              // });
              this.$message.error(msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    ...mapMutations(["LOGIN"])
  }
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  // width: 500px;
  // height: 560px;
  .wh(100%, 100vh);
  background: #fff;
  border-radius: 8px;
  h1 {
    font-size: 28px;
    padding-bottom: 96px;
  }
  .form-wrap {
  }
}
</style>
