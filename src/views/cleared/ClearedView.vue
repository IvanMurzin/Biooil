<script setup lang="ts">
import AInfoCard, { type InfoItem } from "../../components/AInfoCard.vue"
import ASeparateView from "../../components/ASeparateView.vue"
import img1 from "@/assets/images/gasprom.png"
import img2 from "@/assets/images/payaha.png"
import img3 from "@/assets/images/ecospas.png"
import img4 from "@/assets/images/rzd.png"

const data: InfoItem = {
  index: 650,
  title: "Га очищено",
  description:
    "Биопрепаратом «Биоойл-АА» очищено более 650 Га нефтезагрязнённых земель на месторождениях нефти ОАО «Сибнефть», ПАО «Роснефть», АО «Ванкорнефть», ООО «Газпром переработка», АО «Газпромнефть-ННГ» ООО «Газпром добыча Краснодар», АО «Газпромнефть-Муравленко», АО «ГазпромнефтьНоябрьскнефтегаз» при ликвидации аварийных розливов нефтепродуктов на Горьковской и Западно-Сибирской железной дороге ОАО «РЖД».",
}
</script>

<template>
  <div class="section">
    <ASeparateView class="structure">
      <template #left>
        <h3 class="green">Применение биопрепарата «Биоойл-АА»</h3>
      </template>
      <template #right>
        <AInfoCard large-title class="card" v-bind="data" />
        <h3 class="title">Нам доверяют:</h3>
        <div class="wrapper">
          <div class="img-wrapper"><img class="img" :src="img1" /></div>
          <div class="img-wrapper"><img class="img" :src="img2" /></div>
          <div class="img-wrapper"><img class="img" :src="img3" /></div>
          <div class="img-wrapper"><img class="img" :src="img4" /></div>
        </div>
      </template>
    </ASeparateView>
  </div>
</template>

<style scoped lang="scss">
.structure {
  height: unset;
  min-height: 100vh;
}

.section {
  @media (max-width: 800px) {
    &:deep(.separator) {
      display: block;
    }
  }
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vw;
}

.img-wrapper {
  max-height: 16vh;
}

.img {
  height: 100%;
}

.title {
  padding: 2rem 0;
}

@media screen and (max-width: 900px) {
  .img-wrapper {
    max-height: 12vh;
  }
}

@media screen and (max-width: 600px) {
  .card {
    padding: 3rem 0;
  }

  .img-wrapper {
    max-height: 10vh;
  }
}

@media (max-width: 450px) {
  .wrapper {
    grid-template-columns: 1fr;
    width: min-content;
    margin: 0 auto;
  }
}
</style>
