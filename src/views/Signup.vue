<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 15:59:03
 * @LastEditTime : 2021-07-18 16:33:45
 * @Description  : 
 * @FilePath     : /front-end/src/views/Signup.vue
-->


<template>
  <Base>
    <template v-slot:headline>
      <a class="fas fa-user-plus text-color-1" />&ensp; 注册
    </template>
    <template v-slot:tips> 目前仅接受部分邮箱注册。 </template>
    <template #default>
      <el-form
        :model="signupForm"
        :rules="rules"
        ref="signupForm"
        label-width="100px"
        label-position="top"
        class="mx-2"
        hide-required-asterisk
      >
        <el-form-item prop="email" label="注册邮箱">
          <el-input
            type="email"
            v-model="signupForm.email"
            autocomplete="off"
            prefix-icon="el-icon-message"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :disabled="signupForm.btnVarCode"
            @click="sendEmail"
            class="w-full"
          >
            发送验证码
          </el-button>
        </el-form-item>
        <el-form-item prop="verCode" label="验证码">
          <el-input type="text" v-model="signupForm.verCode" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item prop="pass" label="输入密码">
          <el-input
            type="password"
            v-model="signupForm.pass"
            autocomplete="off"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="repass" label="再次输入密码">
          <el-input
            type="password"
            v-model="signupForm.repass"
            autocomplete="off"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="eula">
          <el-checkbox
            v-model="signupForm.eula"
            class="flex items-start justify-between"
          >
            我已阅读，并同意
            <a href="#">
              <span class="text-color-9">《用户协议》</span>
            </a>
          </el-checkbox>
        </el-form-item>
        <el-form-item style="">
          <el-button class="w-full pt-12" type="primary" @click="submitRegForm"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </template>
  </Base>
</template>

<script>
import Base from "./_Base.vue";
import { register, sendVerCode } from "../utils/api/users.js";

export default {
  components: {
    Base,
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 8) {
        callback(new Error("密码长度应超过8位"));
      } else {
        if (this.signupForm.pass !== "") {
          this.$refs.signupForm.validateField("repass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.signupForm.pass) {
        callback(new Error("两次输入密码不一致!"));
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
          this.signupForm.btnVarCode = false;
          callback();
        }
      }
    };
    var validateEULA = (rule, value, callback) => {
      // console.log(value);
      if (value === false) {
        callback(new Error("请阅读协议后勾选"));
      } else {
        callback();
      }
    };
    return {
      signupForm: {
        pass: "12345678",
        email: "skyeye977@stu.xjtu.edu.cn",
        repass: "12345678",
        verCode: "ohvRRvb2Se",
        btnVarCode: true,
        eula: false,
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        repass: [{ validator: validatePass2, trigger: "blur" }],
        eula: [
          { required: true },
          { validator: validateEULA, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitRegForm() {
      this.$refs["signupForm"].validate((valid) => {
        if (valid) {
          register(
            this.signupForm.email,
            this.signupForm.pass,
            this.signupForm.verCode
          )
            .then(() => {
              this.$message.success("注册成功");
              this.$router.push("/login");
            })
            .catch((e) => {
              console.log(e);
              this.$message.error("注册失败：" + e);
            });
        } else {
          // this.$message.error("注册失败：" + e);
          return false;
        }
      });
    },
    sendEmail() {
      sendVerCode(this.signupForm.email)
        .then(() => {
          this.$message.success("发送验证码成功, 60秒后可重新发送");
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("发送失败：" + e);
        });

      this.signupForm.btnVarCode = true;

      setTimeout(() => {
        this.signupForm.btnVarCode = false;
      }, 60);
    },
  },
};
</script>