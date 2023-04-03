<script setup lang="ts">
import image from "@/assets/images/effectivitely.png"
import ABorderedImage from "@/components/ABorderedImage.vue"
</script>

<template>
  <div class="section">
    <div class="structure">
      <h4 class="title">
        Эффективность деструкции углеводородов на нефтезагрязнённых почвах биопрепаратом «Биоойл-АА» подтверждена
        «Заключением по результатам испытаний штаммов микроорганизмов, входящих в биопрепа- раты, разработанные и
        выпускаемые ООО «Биоойл», выданным Институтом биохимии и физиологии микроорганизмов им. Г.К. Скрябина Российской
        академии наук.
      </h4>
      <p class="text">
        Биопрепарат успешно применяется для проведения биоремедиации при температурах окружающей среды от +1°C.
        <br /><br />
        Степень очистки грунта составила 99,6%.
        <br /><br />
        Биопрепарат «Биоойл-АА» рекомендован для очистки почвы и водных поверхностей от загрязнений нефтью и
        нефтепродуктами в регионах <b>с холодным и умеренным климатом.</b>
      </p>
      <div class="right">
        <ABorderedImage :image="image" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.section {
  background-image: url("@/assets/images/forest_background.png");
}
.structure {
  // there's no opportunity to fit such blocks into 100vh height.
  // i think a little scrolling in such slide is possible. noooorm
  // ladno.terpim.terpim.terpim.terpim.terpim.terpim
  height: unset;
  min-height: 100vh;

  display: grid;
  grid-column-gap: 3rem;
  grid-template-rows: 0fr 1fr;
  grid-template-columns: 7fr 5fr;
}

.title,
.text {
  margin: 2rem 0;
}

.right {
  grid-area: 1 / 2 / 3 / 3;
  aspect-ratio: 296 / 420;
  font-size: 0;
}

@media screen and (max-width: 900px) {
  .right {
    grid-area: 2 / 2 / 3 / 3;
  }
  .title {
    grid-column: 1 / 3;
  }
}
@media screen and (max-width: 600px) {
  .structure {
    display: block;
  }
  .right {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
