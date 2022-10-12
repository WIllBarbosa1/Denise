import { createStore } from "vuex";

export default createStore({
  state: {
    patientName: "",
    isConfirmed: false,
    currentNavIndex: "1",
    navItems: [
      {
        index: "1",
        disabled: false,
        label: "Início",
        route: "/",
      },
      {
        index: "2",
        disabled: false,
        label: "DENISE",
        route: "/form",
      },
    ],
    navLink: [
      { index: "1", routeName: "Home" },
      { index: "2", routeName: "Form" },
      { index: "2", routeName: "StepOnePage" },
      { index: "2", routeName: "StepTwoPage" },
      { index: "2", routeName: "StepThreePage" },
      { index: "2", routeName: "StepFourPage" },
    ],
  },
  mutations: {
    updateNavCurrentIndex: (state, index) => {
      state.currentNavIndex = index;
    },
    updatePatientName: (state, name) => {
      state.patientName = name;
    },
    updateIsConfirmed: (state, newState) => {
      state.isConfirmed = newState;
    },
  },
  getters: {
    getNavLink: (state) => state.navLink,
    getNavItems: (state) => state.navItems,
    getNavCurrentIndex: (state) => state.currentNavIndex,
    getPatientName: (state) => state.patientName,
    getIsConfirmed: (state) => state.isConfirmed,
  },
  actions: {
    updatePatientName({ commit, getters }, name) {
      commit("updatePatientName", name);
    },
    updateIsConfirmed({ commit, getters }, name) {
      commit("updateIsConfirmed", name);
    },
    updateNavCurrentIndex({ commit, getters }, newState) {
      commit("updateNavCurrentIndex", newState);
    },
    updateNavCurrentIndexByName({ commit, getters }, name) {
      const navItems = getters.getNavLink;
      const newNav = navItems.filter(({ routeName }) => name === routeName);
      if (newNav.length !== 0) {
        const index = newNav[0].index;
        commit("updateNavCurrentIndex", index);
      }
    },
  },
});
