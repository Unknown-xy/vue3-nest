import { createApp } from "vue";
import "@/style/index.less";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { usePersist } from "pinia-use-persist"; // 持久加密缓存pinia数据

import 'virtual:uno.css'

const app = createApp(App);
app.use(router);

// #region pinia
const pinia = createPinia();
pinia.use(usePersist);
app.use(pinia);
// #endregion

app.mount("#app");
