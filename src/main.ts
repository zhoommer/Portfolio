import "./assets/main.css";

import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";

import App from "./App.vue";
import store from "./store.js";
import router from "./router";
import CanvasJSChart from "@canvasjs/vue-charts";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(CanvasJSChart);
app.use(plugin, defaultConfig);

app.mount("#app");
