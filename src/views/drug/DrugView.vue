<script setup lang="ts">
import image from "@/assets/images/drug.png"
import ATitleTextSmall from "@/components/ATitleTextSmall.vue"
const data = [
  {
    title: "Acinetobacter, Enterobacter, Bacillus",
    text: "Биопрепарат «Биоойл АА» представляет собой смесь лиофилизированных культур микроорганизмов Acinetobacter, Enterobacter, Bacillus.",
  },
  {
    title: "Природные штаммы",
    text: "Штаммы микроорганизмов, входящие в состав биопрепарата, являются природными и выделены из образцов грунта, загрязнённого нефтепродуктами, отобраны на основании их способности к активному окислению углеводородов нефти.",
  },
  {
    title: "0,8×109 КОЕ",
    text: "Количество жизнеспособных бактериальных клеток в 1 грамме - не менее 0,8×109 КОЕ. Готовый биопрепарат расфасовывают в емкости – вакуумированные пакеты или пластиковые флаконы с контролем вскрытия.",
  },
]
</script>

<template>
  <div class="section">
    <div class="structure">
      <ATitleTextSmall :title="data[0].title" :text="data[0].text" />
      <ATitleTextSmall :title="data[1].title" :text="data[1].text" />
      <ATitleTextSmall :title="data[2].title" :text="data[2].text" />
      <img class="image" :src="image" alt="" />
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
  min-height: 100vh;

  display: grid;
  grid-column-gap: 3rem;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 7fr 5fr;
}

.title,
.text {
  margin-bottom: 2rem;
}

.image {
  display: block;
  width: 100%;
  grid-area: 1 / 2 / 3 / 3;
  aspect-ratio: 296 / 420;
  font-size: 0;
}

@media screen and (max-width: 900px) {
  .structure {
    grid-template-rows: none;
  }
  .image {
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
  .image {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
