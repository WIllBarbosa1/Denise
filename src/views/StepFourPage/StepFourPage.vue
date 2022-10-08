<template>
  <div class="page-container">
    <h4>Resultado</h4>
    <span>{{ `Paciente: ${patient}` }}</span>
    <div>
      <span>{{ results.exit === 1 ? "Dengue" : "Outra doença" }}</span>
    </div>
    <span>{{ `Probabilidade: ${results.probability}` }}</span>
    <div class="btn-wrapper">
      <el-button type="primary" @click="handleReset">Novo teste</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepFourPage",
  props: {
    patient: {
      type: String,
      default: "",
    },
    results: {
      type: Object,
      default: () => {
        return {
          exit: 0,
          probability: 0,
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    handleReset() {
      this.$emit("reset");
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
