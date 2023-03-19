<script setup lang="ts">
import FloodHeader from "./widgets/FloodHeader.vue"
import AInfoCard, { type InfoItem } from "../../components/AInfoCard.vue"
import FloodFooter from "./widgets/FloodFooter.vue"

const data: InfoItem = {
  index: 45,
  title: "млн.тонн потеря\xa0нефти",
  description:
    "Согласно экспертным оценкам, потери нефти в мире при ее добыче, переработке и использовании превышают 45 млн. тонн в год, или 2% от ее добычи.",
}
</script>

<template>
  <div class="section">
    <FloodFooter />
    <div class="structure">
      <div class="wrapper">
        <FloodHeader />
        <AInfoCard class="card" v-bind="data" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  height: 55vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.card {
  margin: 0 auto;
  width: 30%;
}
@media screen and (max-width: 900px) {
  .card {
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
