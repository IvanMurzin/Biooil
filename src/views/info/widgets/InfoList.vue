<script setup lang="ts">
import InfoCard, { type InfoItem } from "../components/InfoCard.vue"
const data: InfoItem[] = [
  {
    index: 1,
    title: "Общие сведения о препорате",
    description:
      "Биопрепарат «Биоойл-АА» рекомендуется для применения на территории РФ в качестве биопрепарата на основе микроорганизмов - деструкторов углеводородов, для очистки грунта и воды (кроме водоемов 1-го и 2-го классов водопользования).",
  },
  {
    index: 2,
    title: "Наименование деятельности",
    description:
      "Услуги по рекультивации загрязненных грунтов и поверхности водных систем с использованием биологических методов очистки.",
  },
  {
    index: 3,
    title: "Цель деятельности",
    description:
      "Очистка (биоремедиация) нефтезагрязненных водных систем и грунтов, устранение негативных последствий, связанных с загрязнением окружающей среды нефтью и нефтепродуктами.",
  },
]
</script>

<template>
  <div class="info-list">
    <InfoCard class="card" v-for="d in data" :key="d.index" v-bind="d" />
  </div>
</template>

<style scoped lang="scss">
.info-list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.card {
  padding: 0 2vw;
  flex: 1;
}

@media screen and (max-width: 600px) {
  .info-list {
    flex-direction: column;
  }
  .card {
    padding: 7vh 0 0 0;
  }
}
</style>
