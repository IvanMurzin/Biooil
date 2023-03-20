<script setup lang="ts">
import ABorderedImage from "../../components/ABorderedImage.vue"
import image from "@/assets/images/patent.png"
</script>

<template>
  <div class="section">
    <div class="structure">
      <div class="left">
        <h4 class="title">
          Биопрепарат «Биоойл-АА» на основе ассоциации микроорганизмов – деструкторов нефти, применяется при
          рекультивации земель и вод, загрязненных нефтью, для устранения негативных последствий, связанных с
          загрязнением окружающей среды нефтью и нефтепродуктами.
        </h4>
        <p class="text">
          Биологическое воздействие биопрепарата “Биоойл-АА” на окружающую среду характеризуется тем, что бактериальные
          штаммы, входящие в его состав, не вступают в антагонистические отношения с природной микрофлорой, наоборот,
          быстро адаптируясь к условиям среды, способствуют активации природного биоценоза, травмированного
          загрязнениями. <br /><br />Нефтяные углеводороды под воздействием биопрепарата “Биоойл-АА” трансформируются в
          органическое вещество биомассы и безвредные для экосистемы продукты: воду и углекислый газ.
        </p>
      </div>
      <div class="right"><ABorderedImage :image="image" /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  background-color: var(--color-green);
}
.structure {
  display: flex;
}

.right {
  padding-left: 5rem;
  flex: 1;
}
.text {
  padding: 2rem 0;
}
.left {
  padding-right: 5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
}

@media screen and (max-width: 900px) {
}
</style>
