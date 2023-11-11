import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify } from "unocss";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      UnoCSS({
        presets: [presetUno(), presetAttributify()],
        shortcuts: [],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // 路径别名
        views: path.resolve(__dirname, "./src/views"),
      },
    },
    server: {
      port: 3000, //Vue启动端口地址，设置后需要重新run
      open: true, //编译后自动打开浏览器
      proxy: {
        "/api": {
          target: env.API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          modifyVars: {
            "primary-color": "#0080FF",
            "link-color": "#0080FF",
            "border-radius-base": "4px",
          },
          javascriptEnabled: true,
        },
      },
    },
  };
});
