<template>
  <div class="login-container">
    <el-card class="login-card">
      <el-tabs v-model="activeTab" type="card">
        <el-tab-pane label="登录" name="login">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="80px">
            <el-form-item label="账号" prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label-width="80px">
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="registerForm.nickname" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
              <el-input v-model="registerForm.confirmPassword" type="password" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleRegister">注册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginPage",
  setup() {
    const activeTab = ref("login");

    const loginForm = ref({
      username: "",
      password: "",
    });

    const loginRules = {
      username: [{ required: true, message: "请输入账号", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };

    const registerForm = ref({
      nickname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const registerRules = {
      nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
      email: [
        { required: true, message: "请输入邮箱", trigger: "blur" },
        { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      confirmPassword: [
        { required: true, message: "请确认密码", trigger: "blur" },
        {
          validator: (rule, value, callback) => {
            if (value !== registerForm.value.password) {
              callback(new Error("两次输入的密码不一致"));
            } else {
              callback();
            }
          },
          trigger: "blur",
        },
      ],
    };

    const handleLogin = () => {
      const form = loginForm.value;
      console.log("登录表单数据：", form);
    };

    const handleRegister = () => {
      const form = registerForm.value;
      console.log("注册表单数据：", form);
    };

    return {
      activeTab,
      loginForm,
      loginRules,
      registerForm,
      registerRules,
      handleLogin,
      handleRegister,
    };
  },
};
</script>

<style scoped lang="less">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-size: @font-size;
}

.login-card {
  width: 400px;
  padding: 20px;
}
</style>