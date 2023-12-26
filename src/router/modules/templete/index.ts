import { RouteRecordRaw } from "vue-router";

const testRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("views/templete/store.vue"),
  },
];

export default testRoutes;
