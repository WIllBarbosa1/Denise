import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage/HomePage.vue";
import FormPage from "../views/FormPage/FormPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/form",
    name: "Form",
    component: FormPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
