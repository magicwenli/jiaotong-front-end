<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 19:46:02
 * @LastEditTime : 2021-07-16 09:59:12
 * @Description  : 
 * @FilePath     : /front-end/src/components/SignupCheck.vue
-->

<template>
<Base>
    <template v-slot:headline>
      <a class="far fa-paper-plane text-color-1" />&ensp; 忘记密码？
    </template>
    <template v-slot:tips> 验证后修改密码 </template>
    <template #default>
      <el-form
        :model="findPassForm"
        :rules="rules"
        ref="findPassForm"
        label-width="100px"
        label-position="top"
        class="mx-2"
        hide-required-asterisk
      >
        <el-form-item prop="email" label="注册邮箱">
          <el-input
            type="email"
            v-model="findPassForm.email"
            autocomplete="off"
            prefix-icon="el-icon-message"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :disabled="findPassForm.btnVarCode"
            @click="sendEmail"
            class="w-full"
          >
            发送验证码
          </el-button>
        </el-form-item>
        <el-form-item prop="verCode" label="验证码">
          <el-input type="text" v-model="findPassForm.verCode" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item prop="pass" label="新密码">
          <el-input
            type="password"
            v-model="findPassForm.pass"
            autocomplete="off"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="repass" label="再次输入密码">
          <el-input
            type="password"
            v-model="findPassForm.repass"
            autocomplete="off"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item style="">
          <el-button class="w-full pt-12" type="primary" @click="submitFindPassForm"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </template>
  </Base>
</template>

<script>
import Base from "./_Base.vue";
import { findPassword, sendVerCode } from "../utils/api/users.js";

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
        if (this.findPassForm.pass !== "") {
          this.$refs.findPassForm.validateField("repass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.findPassForm.pass) {
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
          this.findPassForm.btnVarCode = false;
          callback();
        }
      }
    };
    return {
      findPassForm: {
        pass: "",
        email: "",
        repass: "",
        verCode: "",
        btnVarCode: true,
        eula: false,
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        repass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitFindPassForm() {
      this.$refs["findPassForm"].validate((valid) => {
        if (valid) {
          findPassword(
            this.findPassForm.email,
            this.findPassForm.pass,
            this.findPassForm.verCode
          )
            .then(() => {
              this.$message.success("密码已修改");
              this.$router.push("/login");
            })
            .catch((e) => {
              console.log(e);
              this.$message.error("发生预料之外的错误：\n" + e);
            });
        } else {
          // this.$message.error("注册失败：" + e);
          return false;
        }
      });
    },
    sendEmail() {
      sendVerCode(this.findPassForm.email)
        .then(() => {
          this.$message.success("发送验证码成功, 60秒后可重新发送");
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("发送失败：" + e);
        });

      this.findPassForm.btnVarCode = true;

      setTimeout(() => {
        this.findPassForm.btnVarCode = false;
      }, 60);
    },
  },
};
</script>