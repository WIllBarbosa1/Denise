<template>
  <div>
    <h4>Informe os dados do paciente</h4>
    <el-row class="paciente-info__input">
      Nome:
      <el-input v-model="patientInfo.name" type="text" placeholder="Nome do paciente" />
    </el-row>
    <el-row class="paciente-info__input">
      Sexo:
      <el-select v-model="patientInfo.gender" placeholder="Sexo paciente" size="large">
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
      <el-input-number v-model="patientInfo.age" :min="0" :max="150" />
    </el-row>
    <el-row class="paciente-info__input">
      Observações:
      <el-input
        v-model="patientInfo.observations"
        type="textarea"
        placeholder="Informe qualquer observação que ache relevante..."
        :rows="5"
        maxlength="1000"
        show-word-limit
      />
    </el-row>
    <div class="btn-wrapper">
      <el-button
        class="btn-next"
        type="primary"
        @click="handleNextStep"
        :disabled="handleBtnControl"
      >
        Continuar
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepOne",
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
  },
  computed: {
    handleBtnControl() {
      const hasName = this.patientInfo.name.length > 0;
      const hasGender = this.genderOptions
        .map(({ value }) => value)
        .includes(this.patientInfo.gender);
      return !(hasName && hasGender);
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
