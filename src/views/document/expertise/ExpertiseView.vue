<script setup lang="ts">
import ABorderedImage from "@/components/ABorderedImage.vue"
import image from "@/assets/images/expertise.png"
</script>

<template>
  <div class="section">
    <div class="structure">
      <div class="title">
        <h2 class="bold black">ГОСУДАРСТВЕННАЯ</h2>
        <h3 class="bold">ЭКОЛОГИЧЕСКАЯ<br />ЭКСПЕРТИЗА</h3>
      </div>
      <p class="text">
        Федеральной службой по надзору в сфере природопользования завершена государственная экологическая экспертиза
        технической документации «Биопрепарат «Биоойл-АА» и его применение для обработки нефтезагрязнённых водных систем
        и грунтов».<br /><br />Экспертной комиссией установлено соответствие представленной документации требованиям
        законодательства в области охраны окружающей среды.<br /><br />Планируемое место применения биопрепарата
        «Биоойл-АА» в теплое время года – во всех климатических поясах РФ, в том числе и в регионах с холодным и
        умеренным климатом.
      </p>
      <div class="right">
        <ABorderedImage :image="image" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.section {
  background-color: var(--color-green);
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

.title {
  font-weight: bold;
}

.title,
.text {
  margin-bottom: 2rem;
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
