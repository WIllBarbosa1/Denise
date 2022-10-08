<template>
  <div class="page-container">
    <div class="carousel-container">
      <h3 class="carousel-container__title">Curiosidades</h3>
      <el-carousel :interval="4000" type="card" height="200px" indicator-position="outside">
        <el-carousel-item class="carousel-container__item">
          <span> Denise é um acrônimo para Dengue Information System of Estimative </span>
        </el-carousel-item>
        <el-carousel-item class="carousel-container__item">
          <span>
            Denise foi um aplicativo desenvolvido utilizando machine learn e mineração de dados
            durante a cadeira de Mineração de dados na UPE no ano de 2022, que através do uso dessas
            tecnologias procura auxiliar no diagnóstico de dengue de um paciente.
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
        <el-carousel-item class="carousel-container__item">
          <span> Denise foi desenvolvida em Python e JavaScript </span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="about-container">
      <h3>Sobre nós</h3>
      <span>
        Somos apenas um grupo de estudantes da Universidade de Pernambuco (UPE), que procuraram um
        meio de utilizar nossos conhecimentos prévios e a oportunidade que nos foi dada durante a
        cadeira de Mineração de dados na universidade para construir um sistema que possa auxiliar
        no diagnóstico da dengue e contribuir de alguma forma com a sociedade.
      </span>
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
