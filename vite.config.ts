import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      // viteMockServe({
      //   // 解析：设置mock文件存放的目录
      //   mockPath: 'mock',
      //   // 解析：仅在开发环境（serve）开启，生产环境自动关闭
      //   // localEnabled: command === 'serve',
      //   localEnabled: true,
      //   // 解析：支持监控mock文件的变化，实时更新
      //   watchFiles: true,
      //   // 解析：支持读取ts文件（如果项目是TypeScript）
      //   supportTs: true,
      // }),
    ],
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
