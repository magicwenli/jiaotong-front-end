<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 19:46:02
 * @LastEditTime : 2021-07-10 10:22:25
 * @Description  : 
 * @FilePath     : /front-end/src/views/Signup.vue
-->

<template>
  <Base>
  <template v-slot:headline>
    <a class="fas fa-user-plus" />&ensp;
    注册
  </template>
  <template v-slot:tips>
    目前仅接受部分邮箱注册。
  </template>

  <template v-slot:default>
    <a-form name="custom-validation" ref="formRef" :model="formState" :rules="rules" v-bind="layout" @finish="handleFinish" @finishFailed="handleFinishFailed">
      <a-form-item name="email">
        <a-input v-model:value="formState.email" type="text" autocomplete="off" placeholder="邮箱">
          <template #prefix>
            <MailOutlined style="color: rgba(0, 0, 0, 0.5)" />
          </template>
          <template #addonAfter>
            <a-select v-model:value="formState.emailAddon" style="width: 160px">
              <a-select-option value="@stu.xjtu.edu.cn">@stu.xjtu.edu.cn</a-select-option>
              <a-select-option value="@mail.xjtu.edu.cn">@mail.xjtu.edu.cn</a-select-option>
            </a-select>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="nickname">
        <a-input v-model:value="formState.email" type="nickname" autocomplete="off" placeholder="暱称">
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.5)" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="pass">
        <a-input v-model:value="formState.pass" type="password" autocomplete="off" placeholder="密码">
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.5)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="passCheck">
        <a-input v-model:value="formState.passCheck" type="password" autocomplete="off" placeholder="确认密码">
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.5)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <div class="flex items-center justify-between">
          <div class="text-sm">
            已经有账户？
            <router-link to="/login" class="font-medium">
              登录账户
            </router-link>
          </div>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button class="w-full mt-2" type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </template>
  </Base>
</template>

<script>
import Base from "./_Base.vue";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      email: "",
      pass: "",
      passCheck: "",
      emailAddon: "@stu.xjtu.edu.cn",
      remember: false,
    });

    let validatePass = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入密码");
      } else if (value.length < 8) {
        return Promise.reject("密码长度应超过8位");
      } else {
        if (formState.passCheck !== "") {
          formRef.value.validateField("checkPass");
        }
        return Promise.resolve();
      }
    };

    let validatePass2 = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请再次输入密码");
      } else if (value !== formState.pass) {
        return Promise.reject("两次输入不一致");
      } else {
        return Promise.resolve();
      }
    };

    let validateEmail = async (rule, value) => {
      // let patt =
      //   /^[a-zA-Z0-9-.]+@[sS][tT][uU]\.[xX][jJ][tT][uU]\.[eE][dD][uU]\.[cC][nN]$/;
      // let checkEmail = value.search(patt);
      if (value === "") {
        return Promise.reject("请输入邮箱");
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      pass: [
        {
          // required: true,
          validator: validatePass,
          trigger: "change",
        },
      ],
      passCheck: [
        {
          // required: true,
          validator: validatePass2,
          trigger: "change",
        },
      ],
      email: [
        {
          validator: validateEmail,
          // required:true,
          trigger: "change",
          // pattern: "^[a-zA-Z0-9-.]+@[sS][tT][uU]\.[xX][jJ][tT][uU]\.[eE][dD][uU]\.[cC][nN]$"
        },
      ],
    };
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 10,
      },
    };

    const handleFinish = (values) => {
      console.log(values, formState);
      // TODO 加密方式？
    };

    const handleFinishFailed = (errors) => {
      console.log(errors);
    };

    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
    };
  },
  components: {
    Base,
    LockOutlined,
    MailOutlined,
    UserOutlined,
  },
});

// export default {
//   components: { Base },
//   emits: ["showSignup"],
// };
</script>