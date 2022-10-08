<template>
  <header class="header-container">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      class="el-menu-demo header-menu"
      text-color="#475B5A"
      active-text-color="#07BEB8"
      @select="handleSelect"
      router
    >
      <el-image class="header-menu__logo" :src="logo" />
      <el-menu-item index="1" route="/">Sobre</el-menu-item>
      <el-menu-item index="2" route="/form/stepOne">Testes</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
import logo from "../../assets/logo.png";

export default {
  name: "Header",
  data() {
    return {
      logo: logo,
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(newIndex) {
      this.activeIndex = newIndex;
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
