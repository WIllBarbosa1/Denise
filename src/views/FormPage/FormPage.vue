<template>
  <div class="page-container">
    <div class="steps-line-container">
      <el-steps :active="activeStep" align-center>
        <el-step title="Passo 1" description="Informar dados do paciente" />
        <el-step title="Passo 2" description="Informar sintomas" />
        <el-step title="Passo 3" description="Enviar dados" />
        <el-step title="Passo 4" description="Resultado" />
      </el-steps>
    </div>
    <div class="form-container">
      <transition name="slide-fade" mode="out-in">
        <router-view
          @next="handleNextStep"
          @previus="handlePreviusStep"
          @send="handleSendData"
          @reset="handleReset"
          :patientInfo="patientInfo"
          :patientSymptoms="patientSymptoms"
          :patient="patientInfo.name"
          :results="results"
        ></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { ElLoading } from "element-plus";
import { ElMessage } from "element-plus";
import { getResultsMock } from "../../mocks/responseModel";
import { mockFetchGetSymptoms } from "../../mocks/infos";

export default {
  name: "FormPage",
  data() {
    return {
      activeStep: 0,
      results: {},
      patientInfo: {
        name: "",
        age: 0,
        gender: "",
        observations: "",
      },
      patientSymptoms: {},
      path: {
        0: "stepOne",
        1: "stepTwo",
        2: "stepThree",
        3: "stepFour",
      },
    };
  },
  components: {},
  methods: {
    async handleSendData(data) {
      const loading = ElLoading.service({
        lock: true,
        text: "Enviando dados",
        background: "rgba(0, 0, 0, 0.7)",
      });
      try {
        const { data } = await getResultsMock();
        this.results = data;
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response.data,
          showClose: true,
          duration: 3000,
        });
      } finally {
        loading.close();
        this.handleNextStep();
      }
    },
    async handleGetSymptoms() {
      try {
        const { data } = await mockFetchGetSymptoms();
        this.patientSymptoms = data;
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response.data,
          showClose: true,
          duration: 3000,
        });
      }
    },
    handleReset() {
      this.patientInfo = {
        name: "",
        age: 0,
        gender: "",
        observations: "",
      };

      for (const symptom in this.patientSymptoms) {
        this.patientSymptoms[symptom].value = false;
      }
      this.activeStep = 0;
      this.$router.push(this.path[this.activeStep]);
    },
    handleNextStep() {
      this.activeStep++;
      this.$router.push(this.path[this.activeStep]);
    },
    handlePreviusStep() {
      this.activeStep--;
      this.$router.push(this.path[this.activeStep]);
    },
  },
  created() {
    this.handleGetSymptoms();
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
