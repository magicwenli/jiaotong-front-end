<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 15:59:03
 * @LastEditTime : 2021-07-10 09:49:34
 * @Description  : 
 * @FilePath     : /front-end/src/views/Login.vue
-->


<template>
  <Base>
  <template v-slot:default>
    <a-form name="custom-validation" ref="formRef" :model="formState" :rules="rules" v-bind="layout" @finish="handleFinish" @finishFailed="handleFinishFailed">
      <a-form-item name="email">
        <a-input v-model:value="formState.email" type="email" autocomplete="off" placeholder="邮箱">
        <template #prefix><MailOutlined style="color: rgba(0, 0, 0, 0.5)" /></template>
          <template #addonAfter>
            <a-select v-model:value="formState.emailAddon" style="width: 160px">
              <a-select-option value="@stu.xjtu.edu.cn">@stu.xjtu.edu.cn</a-select-option>
              <a-select-option value="@mail.xjtu.edu.cn">@mail.xjtu.edu.cn</a-select-option>
            </a-select>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="pass">
        <a-input v-model:value="formState.pass" type="password" autocomplete="off" placeholder="密码">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.5)" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <div class="flex items-center justify-between">
        <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
        <div class="text-sm">
            <router-link to="/" class="font-medium">
              忘记密码
            </router-link>&emsp;
            <router-link to="/signup" class="font-medium">
              注册账户
            </router-link>
          </div> 
        </div>     
      </a-form-item>
      <a-form-item>
        <a-button class="w-full mt-4" type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </template>
  </Base>
</template>

<script>
import Base from "./_Base.vue";
import { LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState = reactive({
      email: "",
      pass: "",
      emailAddon: "@stu.xjtu.edu.cn",
      remember: false,
    });

    let validatePass = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入密码");
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
  },
});

// export default {
//   components: { Base },
//   emits: ["showSignup"],
// };
</script>