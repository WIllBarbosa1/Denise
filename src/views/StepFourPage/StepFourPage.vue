<template>
  <div class="page-container">
    <h4>Resultado</h4>
    <div class="info-container">
      <div class="info-container__wrapper">
        <span>{{ `Paciente: ${patient}` }}</span>
        <div>
          Resultado:
          <span>{{ results.exit === 1 ? "Dengue" : "Outra doença" }}</span>
        </div>
        <span>{{ `Probabilidade positiva: ${results.positive_probability}%` }}</span>
        <span>{{ `Probabilidade negativa: ${results.negative_probability}%` }}</span>
      </div>
      <div>
        <el-image v-if="results.exit === 1" class="result-img" :src="aprovado" />
        <el-image v-else class="result-img" :src="rejeitado" />
      </div>
    </div>
    <div class="btn-wrapper">
      <el-button type="primary" @click="handleReset">Novo teste</el-button>
    </div>
  </div>
</template>

<script>
import aprovado from "../../assets/aprovado.png";
import rejeitado from "../../assets/rejeitado.png";

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
    return {
      aprovado,
      rejeitado,
    };
  },
  methods: {
    handleReset() {
      this.$emit("reset");
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
