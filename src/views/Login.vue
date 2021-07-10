<!--
 * @Author       : magicwenli
 * @Date         : 2021-07-08 15:59:03
 * @LastEditTime : 2021-07-10 14:46:25
 * @Description  : 
 * @FilePath     : /front-end/src/views/Login.vue
-->


<template>
  <Base>
    <template #default>
      <el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="select" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </template>
      </el-input>
    </template>
  </Base>
</template>

<script>
import Base from "./_Base.vue";
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
    Base
  },
});

// export default {
//   components: { Base },
//   emits: ["showSignup"],
// };
</script>