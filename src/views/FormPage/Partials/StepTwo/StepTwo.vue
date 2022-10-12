<template>
  <div>
    <h4>Informe os sintomas do paciente</h4>
    <div class="checkbox-container">
      <el-checkbox
        v-for="(symptom, index) in patientSymptoms"
        :key="`symptom-ckeckbox-${index}`"
        v-model="symptom.value"
        :label="symptom.label"
        size="large"
      />
    </div>
    <div class="btn-wrapper">
      <el-button @click="handlePreviusStep">Retornar</el-button>
      <el-button type="primary" @click="handleNextStep">Continuar</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepTwo",
  props: {
    patientSymptoms: {
      type: Object,
      default: () => {
        return {};
      },
    },
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
