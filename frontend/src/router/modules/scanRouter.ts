import { RouteRecordRaw } from "vue-router";

const autoRoutes: RouteRecordRaw[] = [];

// 读取 `src/views` 目录下的所有文件名
const modules = import.meta.glob("views/**/*.vue");

// 遍历文件名并生成路由
for (const key in modules) {
  if (key.endsWith(".vue")) {
    const name = key.match(/\/src\/views\/templete\/(.+)\.vue/)![1];
    autoRoutes.push({
      path: `/${name}`,
      name: name,
      component: modules[key],
    });
  }
}

export default autoRoutes;
