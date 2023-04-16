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
      <div class="text-wrapper">
        <ATitleTextSmall v-for="d in data" :title="d.title" :text="d.text" class="text"/>
      </div>
      <img class="image" :src="image" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.section {
  background-color: var(--color-green);
}
.structure {
  min-height: 100vh;
  height: unset;
  display: flex;
  gap: 5rem;
  align-items: flex-start;
}

.text {
  margin-bottom: 2rem;
}

.image {
  display: block;
  max-width: 40%;
  font-size: 0;
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: span 3;
}

@media screen and (max-width: 900px) {
  .structure {
    // height: unset;
    display: block;
  }
  .image {
    width: 70%;
    max-width: unset;
    margin: 0 auto;
  }
}
</style>
