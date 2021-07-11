<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 15:59:03
 * @LastEditTime : 2021-07-11 21:31:10
 * @Description  : 
 * @FilePath     : \jiaotong-front-end\src\views\Login.vue
-->


<template>
  <Base>
    <template #default>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        label-position="top"
        class="space-y-4"
        hide-required-asterisk
      >
        <el-form-item prop="email">
          <el-input
            type="email"
            v-model="loginForm.email"
            autocomplete="off"
            prefix-icon="el-icon-message"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="loginForm.pass"
            autocomplete="off"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="flex items-center justify-between">
            <el-checkbox v-model:checked="loginForm.remember">
              记住我
            </el-checkbox>
            <div class="text-sm font-medium">
              <router-link to="/" > 忘记密码 </router-link>
              &emsp;
              <router-link to="/signup">
                注册账户
              </router-link>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            class="w-full"
            type="primary"
            @click="submitForm('loginForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </template>
  </Base>
</template>

<script>
import Base from "./_Base.vue";

export default {
  components: {
    Base,
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        let patt =
          /^[a-zA-Z0-9-.]+@[sS][tT][uU]\.[xX][jJ][tT][uU]\.[eE][dD][uU]\.[cC][nN]$/;
        let emailPass = value.search(patt);

        if (emailPass) {
          callback(new Error("暂时不接受该类邮箱注册"));
        } else {
          callback();
        }
      }
    };
    return {
      loginForm: {
        pass: "",
        email: "",
        remember: false,
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>