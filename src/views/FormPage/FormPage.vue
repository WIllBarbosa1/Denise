<template>
  <div class="page-container">
    <div class="steps-container">
      <el-steps :active="activeStep" align-center>
        <el-step title="Passo 1" description="Informar dados do paciente" />
        <el-step title="Passo 2" description="Informar sintomas" />
        <el-step title="Passo 3" description="Enviar dados" />
        <el-step title="Passo 4" description="Resultado" />
      </el-steps>
    </div>
    <div class="paciente-info-container">
      <el-row class="paciente-info__input">
        Nome:
        <el-input type="text" placeholder="Nome do paciente" />
      </el-row>
      <el-row class="paciente-info__input">
        Sexo:
        <el-select v-model="gender" placeholder="Sexo paciente" size="large">
          <el-option
            v-for="item in genderOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-row>
      <el-row class="paciente-info__input">
        Idade:
        <el-input-number v-model="age" :min="0" :max="150" />
      </el-row>
      <el-row class="paciente-info__input">
        Observações:
        <el-input
          type="textarea"
          placeholder="Informe qualquer observação que ache relevante..."
          :rows="5"
          maxlength="1000"
          show-word-limit
        />
      </el-row>
    </div>
    <div class="step-button-container">
      <el-button @click="handlePreviusStep">Passo anterior</el-button>
      <el-button @click="handleNextStep">Proximo passo</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      age: 0,
      gender: "",
      genderOptions: [
        {
          value: 0,
          label: "Homen",
        },
        {
          value: 1,
          label: "Mulher",
        },
      ],
      activeStep: 0,
    };
  },
  methods: {
    handleNextStep() {
      this.activeStep++;
    },
    handlePreviusStep() {
      this.activeStep--;
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
