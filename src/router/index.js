import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage/HomePage.vue";
import FormPage from "../views/FormPage/FormPage.vue";
import StepOnePage from "../views/StepOnePage/StepOnePage.vue";
import StepTwoPage from "../views/StepTwoPage/StepTwoPage.vue";
import StepThreePage from "../views/StepThreePage/StepThreePage.vue";
import StepFourPage from "../views/StepFourPage/StepFourPage.vue";
import store from "../store";

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

router.beforeEach((to, from, next) => {
  const { name } = to;
  store.dispatch("updateNavCurrentIndexByName", name);

  const passStepOne = store.getters.getPatientName?.length > 0;
  const passStepThree = store.getters.getIsConfirmed;

  if (name !== "Home") {
    if (name !== "StepOnePage" && !passStepOne) {
      next("/form/stepOne");
    }
    if (name === "StepFourPage" && !passStepThree) {
      next("/form/StepThree");
    }
  }

  next();
});

export default router;
