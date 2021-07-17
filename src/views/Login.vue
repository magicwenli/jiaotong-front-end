<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 15:59:03
 * @LastEditTime : 2021-07-17 16:09:30
 * @Description  : 
 * @FilePath     : /front-end/src/views/Login.vue
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
            placeholder="请输入邮箱"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="loginForm.pass"
            autocomplete="off"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="flex items-center justify-between">
            <el-checkbox v-model:checked="loginForm.remember">
              记住我
            </el-checkbox>
            <div class="text-sm font-medium">
              <router-link to="/">
                <span class="text-color-9"> 忘记密码</span>
              </router-link>
              &emsp;
              <router-link to="/signup">
                <span class="text-color-9">注册账户</span>
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
import { login } from "../utils/api/users.js";

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
        pass: "12345678",
        email: "skyeye977@stu.xjtu.edu.cn",
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
      console.log("123");
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // API.post("/login", {
          //   email: this.loginForm.email,
          //   password: this.loginForm.password,
          // }).then((data) => {
          //   //登录失败,先不讨论
          //   console.log(data);
          //   //设置Vuex登录标志为true，默认userLogin为false
          //   this.$store.dispatch("userLogin", true);
          //   //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
          //   //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
          //   localStorage.setItem("Flag", "isLogin");
          //   //iViewUi的友好提示
          //   ElMessage({ showClose: true, message: "登录成功" });
          //   //登录成功后跳转到指定页面
          //   this.$router.push("/");
          // }).catch((error) => {
          //     ElMessage({
          //       showClose: true,
          //       message: "登录出现预料之外的错误",
          //       type: "error",
          //     });
          // });
          login(this.loginForm.email, this.loginForm.pass)
            .then(() => {
              this.$store.dispatch("userLogin", true);
              localStorage.setItem("Flag", "isLogin");
              this.$router.push("/");
            })
            .catch((e) => {
              console.log(e);
              this.$message.error("登录失败：" + e);
            });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>