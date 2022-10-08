<template>
  <div class="page-container">
    <h4>Confirme as informações a serem enviadas</h4>
    <div class="checkbox-container">
      <span>{{ `Nome: ${this.patientInfo.name}` }}</span>
      <span>{{ `Sexo: ${genderDic[this.patientInfo.gender]}` }}</span>
      <span>{{ `Idade: ${this.patientInfo.age}` }}</span>
    </div>
    <div class="symptoms-container">
      <h5>Sintomas</h5>
      <el-row class="symptoms-container__row" v-for="(symptom, index) in patientSymptoms">
        <el-icon v-if="symptom.value" :size="20" color="#07BEB8"><SuccessFilled /></el-icon>
        <el-icon v-else :size="20" color="#07BEB8"><CircleClose /></el-icon>
        <span>{{ symptom.label }}</span>
      </el-row>
    </div>
    <div v-if="this.patientInfo.observations.length > 0" class="observations-container">
      <span>{{ `Observações: ${this.patientInfo.observations}` }}</span>
    </div>
    <div class="btn-wrapper">
      <el-button @click="handlePreviusStep">Retornar</el-button>
      <el-button type="primary" @click="handleSendData">Enviar dados</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepThreePage",
  props: {
    patientInfo: {
      type: Object,
      default: () => {
        return {
          name: "",
          age: 0,
          gender: "",
          observations: "",
        };
      },
    },
    patientSymptoms: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      genderDic: {
        0: "Homen",
        1: "Mulher",
      },
    };
  },
  methods: {
    handleSendData() {
      let sendData = { ...this.patientInfo };
      for (const symptom in this.patientSymptoms) {
        sendData[symptom] = this.patientSymptoms[symptom].value;
      }
      this.$emit("send", sendData);
    },
    handlePreviusStep() {
      this.$emit("previus", this.patientInfo);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
