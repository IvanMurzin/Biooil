<script setup lang="ts">
import image from "@/assets/images/production.png"
import AFooterImage from "../../components/AFooterImage.vue"
import ASeparateView from "../../components/ASeparateView.vue"
</script>

<template>
  <div class="section">
    <ASeparateView class="structure">
      <template #left>
        <h3>Производитель биопрепарата</h3>
      </template>
      <template #right>
        <ul>
          <li>
            <h4 class="info">
              ООО «Биоойл» - в лабораторном комплексе научно-технологического парка в сфере биотехнологий -
              «Биотехнопарк Кольцово».
            </h4>
          </li>
          <li>
            <h4 class="info">Федеральное Казённое Предприятие «Армавир- ская биофабрика» (Краснодарский край).</h4>
          </li>
        </ul>
        <p class="text">
          При производстве биопрепарата «Биоойл-АА» не осуществляется выброс и сброс веществ, а также размещение
          отходов, отнесённых Распоряжением Правительства Российской Федерации от 08.07.2015 No1316-р к Перечню
          загрязняющих веществ, в отношении которых применяются меры государственного регулирования в области охраны
          окружающей среды.
        </p>
      </template>
    </ASeparateView>
    <AFooterImage class="footer-image" :image="image" />
  </div>
</template>

<style scoped lang="scss">
.section {
  background-color: var(--color-green);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

ul {
  margin-left: 3rem;
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: black;
  font-weight: bold;
  font-size: 2rem;
  display: inline-block;
  width: 3rem;
  margin-left: -3rem;
  margin-top: 2rem;
}

h4 {
  display: inline;
}
.structure {
  height: unset;
  padding-bottom: 4vh;
}
.text {
  padding-top: 2rem;
}
.footer-image {
  flex: 1;
}
@media screen and (max-width: 600px) {
  .info {
    padding: 4rem 0;
  }
}
</style>
