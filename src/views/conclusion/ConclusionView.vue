<script setup lang="ts">
import image from "@/assets/images/plant_background.png"
</script>

<template>
  <div class="section">
    <div class="background">
      <img class="bg-image" :src="image" />
    </div>
    <div class="structure">
      <div class="text">
        <h4>Выводы по применению и эффективности использования биопрепарата «Биоойл-АА»</h4>
        <p>
          Представленные выше доказательства эффективности биопрепарата «Биоойл-АА» для обезвреживания разливов нефти и
          нефтепродуктов, с одновременным отсутствием негативного воздействия на объекты окружающей среды и живые
          организмы, позволяют сделать вывод об эффективном применении биопрепарата «Биоойл-АА» по целевому назначению -
          очистка (биоремедиация) нефтезагрязненных водных систем и грунтов, устранение негативных последствий,
          связанных с загрязнением окружающий среды нефтью и нефтепродуктами.<br /><br />Технология получения и
          применения биодеструктора нефти и нефтепродуктов биопрепарат «Биоойл-АА» соответствует требованиям
          природоохранного законодательства и рекомендована к реализации.<br /><br />Ликвидация нефтезагрязнений
          биопрепаратом «Биоойл-АА» в соответствии с регламентами его применения позволит восстановить нарушенные
          природные территорий и акватории.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  background-color: var(--color-green);
  display: flex;
  flex-direction: row-reverse;
}

.structure {
  // width: unset;
  padding-left: 5rem;
  padding-right: 5rem;
}

.background {
  // position: absolute;
  // top: 0;
  // right: -50px;
  // height: 100vh;
  // margin-right: -20%;
  // max-width: 20vw;
  min-width: 30vw;
}

.bg-image {
  // filter: saturate(300%);
  height: 100%;
}

p,
h4 {
  padding-bottom: 2rem;
}

.text {
  position: relative;
  z-index: 2;
  max-width: 60vw;
}

@media screen and (max-width: 1100px) {
  .background {
    // right: -100px;
    width: 30rem;
    min-width: unset;
  }
}

@media screen and (max-width: 900px) {
  .background {
    // right: -150px;
    // width: 40rem;
  }
}

@media screen and (max-width: 600px) {
  .structure {
    padding-left: 0;
    padding-right: 0;
  }

  .text {
    max-width: unset;
  }

  .background {
    display: none;
  }
}</style>
