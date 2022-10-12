<template>
  <div class="page-container">
    <h4>Informe os sintomas do paciente</h4>
    <div class="checkbox-container">
      <CheckBoxDetail
        v-for="(symptom, index) in patientSymptoms"
        :key="`symptom-ckeckbox-${index}`"
        :symptom="symptom"
      />
      <!-- size="large" -->
      <!-- v-model="symptom.value" -->
      <!-- :label="symptom.label" -->
    </div>
    <div class="btn-wrapper">
      <el-button @click="handlePreviusStep">Retornar</el-button>
      <el-button type="primary" @click="handleNextStep">Continuar</el-button>
    </div>
  </div>
</template>

<script>
import CheckBoxDetail from "../../components/CheckBoxDetail/CheckBoxDetail.vue";

export default {
  name: "StepTwoPage",
  props: {
    patientSymptoms: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  components: {
    CheckBoxDetail,
  },
  data() {
    return {
      genderOptions: [
        {
          value: 0,
          label: "Homem",
        },
        {
          value: 1,
          label: "Mulher",
        },
      ],
    };
  },
  methods: {
    handleNextStep() {
      this.$emit("next", this.patientInfo);
    },
    handlePreviusStep() {
      this.$emit("previus", this.patientInfo);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
