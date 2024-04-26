import { createWebHistory, createRouter } from "vue-router";
import CartPage from "../pages/CartPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";
import MenuPage from "../pages/MenuPage.vue";
import NewsPage from "../pages/NewsPage.vue";

const routes = [
      {
        path: "/news",
        name: "NewsPage",
        component: NewsPage, 
      },
      {
        path: "/contacts",
        name: "ContactsPage",
        component: ContactsPage,
      },
      {
        path: "/menu",
        name: "MenuPage",
        component: MenuPage
      },
      {
        path: "/cart",
        name: "CartPage",
        component: CartPage
      }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;