import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue()],
    base: env.VITE_BASE_URL || "/",
    css: {
      preprocessorOptions: {
        // 配置 Less 预处理器选项(less-loader), 用于识别出 Less 文件并正确处理它们，如果你不使用.less 文件，可以选择不配置这个选项
        less: {
          // 这里可以配置 Less 的选项
          javascriptEnabled: true, // 如果你需要使用 Less 中的 JavaScript
          modifyVars: {
            // 在这里配置 Less 变量覆盖，常用于主题定制
            // 例如：'primary-color': '#1890ff',
          },
          additionalData: `@import "@/styles/variables.less";` // 全局引入变量文件(只会引入变量，不会引入样式)
        }
      }
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      open: env.VITE_BASE_URL || '/',
      port: 8000,
      host: '0.0.0.0'
    },
  };
});
