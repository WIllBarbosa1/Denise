<template>
  <header class="header-container">
    <el-menu
      :default-active="getCurrentNav"
      mode="horizontal"
      class="el-menu-demo header-menu"
      text-color="#475B5A"
      active-text-color="#07BEB8"
      @select="handleSelect"
      router
    >
      <el-image class="header-menu__logo" :src="logo" />
      <el-menu-item index="1" route="/">Início</el-menu-item>
      <el-menu-item index="2" route="/form/stepOne">DENISE</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
import logo from "../../assets/logo.png";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      logo: logo,
      activeIndex: "",
    };
  },
  methods: {
    ...mapGetters(["getNavItems", "getNavCurrentIndex"]),
    ...mapActions(["updateNavCurrentIndex"]),

    handleSelect(newIndex) {
      this.updateNavCurrentIndex(newIndex);
    },
  },
  computed: {
    getCurrentNav() {
      return this.getNavCurrentIndex();
    },
  },
  created() {
    this.navItems = this.getNavItems();
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
