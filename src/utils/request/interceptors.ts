import axios, { 
  type InternalAxiosRequestConfig, 
  type AxiosResponse, 
  type AxiosRequestConfig 
} from "axios";
import { ElMessage } from "element-plus";

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api", // 基础请求地址
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem("token"); // 从本地存储获取 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 在请求头中添加 token
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    console.error("请求错误：", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code !== 200) {
      // 假设后端返回的状态码为 200 表示成功
      ElMessage.error(res.message || "请求失败");
      return Promise.reject(new Error(res.message || "Error"));
    }
    return res;
  },
  (error) => {
    // 处理响应错误
    console.error("响应错误：", error);
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        ElMessage.error("登录状态已过期，请重新登录");
        localStorage.removeItem("token"); // 清除本地存储的 token
        window.location.href = "/login"; // 跳转到登录页
      } else {
        ElMessage.error(error.response.data.message || "请求失败");
      }
    } else {
      ElMessage.error("网络错误，请稍后重试");
    }
    return Promise.reject(error);
  }
);


export const request = {
  post: (url: string, data?: object, config: AxiosRequestConfig = {}) => service.post(url, data, config),
  get: (url: string, params?: object) => service.get(url, { params }),
  put: (url: string, data?: object, config: AxiosRequestConfig = {}) => service.put(url, data, config),
  delete: (url: string, config: AxiosRequestConfig = {}) => service.delete(url, config),
  request: (config: AxiosRequestConfig = {}) => service(config)
};

export default service;