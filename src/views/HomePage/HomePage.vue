<template>
  <div class="page-container">
    <div class="page-container__inner">
      <h1 class="page-title">Bem-vindo(a)!</h1>
      <div class="about-container">
        <h2 class="page-sub-title">Sobre</h2>
        <span>
          Olá, eu sou a DENISE, acrônimo para <strong>DEN</strong>gue <strong>I</strong>nformation
          <strong>S</strong>ystem of <strong>E</strong>stimative. Sou uma assistente virtual para
          auxílio no diagnóstico de Dengue. Meu objetivo é ajudar os profissionais de saúde na
          tomada de decisão para um melhor diagnóstico inicial de seus pacientes!
        </span>
        <span>
          Sou um sistema desenvolvido por discentes do curso de Sistemas de Informação na
          Universidade de Pernambuco (UPE) durante a disciplina de Mineração de Dados, sob a
          orientação da Profa. Dra. Patricia Takako Endo.
        </span>
        <span>
          Sou uma aplicação baseada em Machine Learning que utiliza do modelo de Decision Tree. Para
          a aprendizagem dos dados, utilizei de registros clínicos reais oriundos da base de dados
          do SINAN (Sistema de Informação de Agravo de Notificação).
        </span>
      </div>
      <div class="about-container__team">
        <h2 class="page-sub-title">Equipe</h2>
        <div class="users-container">
          <UserCard
            v-for="(user, index) in usersInfo"
            :key="`user-${user}-${index}`"
            :userInfo="user"
          />
        </div>
      </div>
    </div>
    <div class="images-container">
      <el-image class="images-container__image" :src="upe" />
      <el-image class="images-container__image" :src="dot" />
    </div>
  </div>
</template>

<script>
import UPE from "../../assets/UPE.png";
import dotLab from "../../assets/dotlab.png";
import { mockFetchGetTeamInfos } from "../../mocks/infos";
import UserCard from "../../components/UserCard/UserCard.vue";
import { ElMessage } from "element-plus";

export default {
  name: "HomePage",
  data() {
    return {
      upe: UPE,
      dot: dotLab,
      usersInfo: [],
    };
  },
  components: {
    UserCard,
  },
  methods: {
    async handleGetGitInfos(user) {
      try {
        const { data } = await mockFetchGetTeamInfos(user);
        this.usersInfo = data;
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response.data,
          showClose: true,
          duration: 3000,
        });
      }
    },
  },
  created() {
    this.handleGetGitInfos("dotlab-brazil");
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
