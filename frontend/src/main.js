import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import HeaderComponent from "./layout/HeaderComponent.vue";
import FooterComponent from "./layout/FooterComponent.vue";

const app = createApp(App);

    app
    .component("HeaderComponent", HeaderComponent)
    .component("FooterComponent", FooterComponent)
    .use(router)
    .mount("#app");
