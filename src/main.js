import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/tailwind.css";
import "./assets/style/global.css";
import { registerGlobalConponent } from "@/utils/import";

import { projectAuth } from "./configs/firebase";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    registerGlobalConponent(app);
    app.use(router);

    app.mount("#app");
  }
});
