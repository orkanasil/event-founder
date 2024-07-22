import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./plugins/axios";
import installGlobalComponents from "./plugins/globalComponents";
import router from "./router/index";
import { PaginationBar } from "v-page";

const app = createApp(App);

installGlobalComponents(app);

app.use(PaginationBar);
app.use(createPinia());
app.use(router);
app.mount("#app");
