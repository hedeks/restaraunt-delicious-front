import { createWebHistory, createRouter } from "vue-router";
import CartPage from "../pages/CartPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";
import MenuPage from "../pages/MenuPage.vue";
import NewsPage from "../pages/NewsPage.vue";
import RedirectPage from "../pages/RedirectPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: RedirectPage,
  },
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
    component: MenuPage,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 300)
    })
  },
});

export default router;
