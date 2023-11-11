import { createPinia } from "pinia";
import { useTestStore } from "./modules/templete";

const pinia = createPinia();

export { useTestStore };
export default pinia;