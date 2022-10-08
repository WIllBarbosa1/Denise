import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage/HomePage.vue";
import FormPage from "../views/FormPage/FormPage.vue";
import StepOnePage from "../views/StepOnePage/StepOnePage.vue";
import StepTwoPage from "../views/StepTwoPage/StepTwoPage.vue";
import StepThreePage from "../views/StepThreePage/StepThreePage.vue";
import StepFourPage from "../views/StepFourPage/StepFourPage.vue";

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
    children: [
      {
        path: "stepOne",
        name: "StepOnePage",
        component: StepOnePage,
      },
      {
        path: "stepTwo",
        name: "StepTwoPage",
        component: StepTwoPage,
      },
      {
        path: "stepThree",
        name: "StepThreePage",
        component: StepThreePage,
      },
      {
        path: "stepFour",
        name: "StepFourPage",
        component: StepFourPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
