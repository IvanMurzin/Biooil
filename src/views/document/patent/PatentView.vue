<script setup lang="ts">
import image from "@/assets/images/patent.png"
import ABorderedImage from "@/components/ABorderedImage.vue"
</script>

<template>
  <div class="section">
    <div class="structure">
      <h4 class="title">
        Биопрепарат «Биоойл-АА» на основе ассоциации микроорганизмов – деструкторов нефти, применяется при рекультивации
        земель и вод, загрязненных нефтью, для устранения негативных последствий, связанных с загрязнением окружающей
        среды нефтью и нефтепродуктами.
      </h4>
      <p class="text">
        Биологическое воздействие биопрепарата “Биоойл-АА” на окружающую среду характеризуется тем, что бактериальные
        штаммы, входящие в его состав, не вступают в антагонистические отношения с природной микрофлорой, наоборот,
        быстро адаптируясь к условиям среды, способствуют активации природного биоценоза, травмированного загрязнениями.
        <br /><br />Нефтяные углеводороды под воздействием биопрепарата “Биоойл-АА” трансформируются в органическое
        вещество биомассы и безвредные для экосистемы продукты: воду и углекислый газ.
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

.title,
.text {
  margin-bottom: 2rem;
}
.text {
  font-weight: 100;
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
