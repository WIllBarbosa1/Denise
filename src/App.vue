<template>
  <div class="page-container">
    <Header />
    <transition name="slide-fade" mode="out-in">
      <router-view class="page-content" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style src="./global.scss" lang="scss"></style>
