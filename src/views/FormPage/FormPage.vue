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
import { fetchGetResult } from "../../service/model";
import { mapActions } from "vuex";

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
    ...mapActions(["updateIsConfirmed", "updatePatientName"]),

    handleFormatSendData(data) {
      const sendData = {};
      const keyDic = {
        gender: "cs_sexo",
        febre: "febre",
        mialgia: "mialgia",
        cefaleia: "cefaleia",
        exantema: "exantema",
        vomito: "vomito",
        nausea: "nausea",
        dorCostas: "dor_costas",
        artralgia: "artralgia",
        dorRetro: "dor_retro",
        leucopenia: "leucopenia",
        petequias: "petequia_n",
        observations: "observations",
        age: "age",
        name: "name",
      };

      for (const key in data) {
        sendData[keyDic[key]] = data[key];
      }

      return sendData;
    },

    async handleSendData(sendData) {
      const loading = ElLoading.service({
        lock: true,
        text: "Enviando dados",
        background: "rgba(0, 0, 0, 0.7)",
      });
      try {
        const send = this.handleFormatSendData(sendData);
        let { data } = await fetchGetResult(send);
        if (data) {
          this.results = data;
          this.updateIsConfirmed(true);
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error,
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
      this.updateIsConfirmed(false);
      this.updatePatientName("");
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
