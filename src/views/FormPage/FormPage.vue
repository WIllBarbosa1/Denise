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
    <div>
      <transition name="slide-fade" mode="out-in">
        <router-view
          @next="handleNextStep"
          @previus="handlePreviusStep"
          @send="handleSendData"
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
      patientSymptoms: {
        febre: {
          label: "Febre",
          value: false,
        },
        mialgia: {
          label: "Mialgia",
          value: false,
        },
        cefaleia: {
          label: "Cefaleia",
          value: false,
        },
        exantema: {
          label: "Exantema",
          value: false,
        },
        vomito: {
          label: "Vomito",
          value: false,
        },
        nausea: {
          label: "Nausea",
          value: false,
        },
        dorCostas: {
          label: "Dor nas costas",
          value: false,
        },
        astralgia: {
          label: "Astralgia",
          value: false,
        },
        dorRetro: {
          label: "Dor retroorbital",
          value: false,
        },
        leucopenia: {
          label: "Leucopenia",
          value: false,
        },
        petequias: {
          label: "Petequias",
          value: false,
        },
      },
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
    handleReset() {
      this.patientInfo = {
        name: "",
        age: 0,
        gender: "",
        observations: "",
      };
      this.patientSymptoms = {
        febre: {
          label: "Febre",
          value: false,
        },
        mialgia: {
          label: "Mialgia",
          value: false,
        },
        cefaleia: {
          label: "Cefaleia",
          value: false,
        },
        exantema: {
          label: "Exantema",
          value: false,
        },
        vomito: {
          label: "Vomito",
          value: false,
        },
        nausea: {
          label: "Nausea",
          value: false,
        },
        dorCostas: {
          label: "Dor nas costas",
          value: false,
        },
        astralgia: {
          label: "Astralgia",
          value: false,
        },
        dorRetro: {
          label: "Dor retroorbital",
          value: false,
        },
        leucopenia: {
          label: "Leucopenia",
          value: false,
        },
        petequias: {
          label: "Petequias",
          value: false,
        },
      };
      this.activeStep = 0;
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
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
