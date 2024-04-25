import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import HeaderComponent from "./layout/HeaderComponent.vue";

const app = createApp(App);

    app
    .component("HeaderComponent", HeaderComponent)
    .use(router)
    .mount("#app");
