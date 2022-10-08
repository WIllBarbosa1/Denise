<template>
  <div>
    ClauClau
    <div class="btn-wrapper">
      <el-button @click="handlePreviusStep">Retornar</el-button>
      <el-button type="primary" @click="handleSendData">Novo teste</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepFour",
  props: {},
  data() {
    return {};
  },
  methods: {
    handlePreviusStep() {
      this.$emit("previus", this.patientInfo);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
