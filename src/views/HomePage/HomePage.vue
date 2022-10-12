<template>
  <div class="page-container">
    <div class="carousel-container">
      <h1 class="carousel-container__title">Bem-vindo(a)!</h1>
      <el-carousel :interval="15000" type="card" height="200px" indicator-position="outside">
        <el-carousel-item class="carousel-container__item">
          <span
            >Olá, eu sou a DENISE, acrônimo para <strong>DEN</strong>gue
            <strong>I</strong>nformation <strong>S</strong>ystem of <strong>E</strong>stimative. Sou
            uma assistente virtual para auxílio no diagnóstico de Dengue. Meu objetivo é ajudar os
            profissionais de saúde na tomada de decisão para um melhor diagnóstico inicial de seus
            pacientes!
          </span>
        </el-carousel-item>
        <el-carousel-item class="carousel-container__item">
          <span>
            Sou uma aplicação baseada em Machine Learning que utiliza do modelo de Decision Tree.
            Para a aprendizagem dos dados, utilizei de registros clínicos reais oriundos da base de
            dados do SINAN (Sistema de Informação de Agravo de Notificação).
          </span>
        </el-carousel-item>
        <el-carousel-item class="carousel-container__item">
          <span>
            A dengue é uma doença infecciosa febril aguda, que pode se apresentar de forma benigna
            ou grave, dependendo de alguns fatores, entre eles: o vírus envolvido, infecção anterior
            pelo vírus da dengue e fatores individuais como doenças crônicas (diabetes, asma
            brônquica, anemia falciforme).
          </span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="about-container">
      <h2>Sobre</h2>
      <span>
        A DENISE é um sistema desenvolvido por discentes do curso de Sistemas de Informação na
        Universidade de Pernambuco (UPE) durante a disciplina de Mineração de Dados, sob a
        orientação da Profa. Dra. Patricia Takako Endo.
      </span>
    </div>
    <div class="about-container">
      <h2>Equipe</h2>
      <ul>
        <li>Arthur Isvi - Aluno de graduação na UPE</li>
        <li>Will de Azevedo - Aluno de graduação na UPE</li>
        <li>Dra. Patricia Takako Endo - Professora do PPGEC</li>
      </ul>
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

export default {
  name: "HomePage",
  data() {
    return {
      upe: UPE,
      dot: dotLab,
    };
  },
};
</script>

<style src="./style.scss" lang="scss" scoped></style>
