<script setup lang="ts">
import image from "@/assets/images/drug.png"
</script>

<template>
  <div class="section">
    <div class="structure">
      <div class="text-wrapper">
        <h3 class="title">Acinetobacter, Enterobacter, Bacillus</h3>
        <p class="text">
          Биопрепарат «Биоойл АА» представляет собой смесь лиофилизированных культур микроорганизмов Acinetobacter,
          Enterobacter, Bacillus.
        </p>
      </div>
      <div class="text-wrapper">
        <h3 class="title">Природные штаммы</h3>
        <p class="text">
          Штаммы микроорганизмов, входящие в состав биопрепарата, являются природными и выделены из образцов грунта,
          загрязнённого нефтепродуктами, отобраны на основании их способности к активному окислению углеводородов нефти.
        </p>
      </div>
      <div class="text-wrapper">
        <h3 class="title">0,8×109 КОЕ</h3>
        <p class="text">
          Количество жизнеспособных бактериальных клеток в 1 грамме - не менее 0,8×109 КОЕ. Готовый биопрепарат
          расфасовывают в емкости – вакуумированные пакеты или пластиковые флаконы с контролем вскрытия.
        </p>
      </div>
      <div class="right">
        <img class="image" :src="image" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.image {
  width: 100%;
}
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

.right {
  grid-area: 1 / 2 / 3 / 3;
  aspect-ratio: 296 / 420;
  font-size: 0;
}

@media screen and (max-width: 900px) {
  .structure {
    grid-template-rows: none;
    grid-template-columns: none;
  }
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
