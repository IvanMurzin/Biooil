<script setup lang="ts">
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
      <div class="left">
        <h3 class="title green">Тысячи нефтеразливов в&nbsp;год</h3>
      </div>
      <div class="right">
        <h4 class="info">
          Загрязнение природных экосистем нефтью и нефтепродуктами происходит на всех этапах работ и во всех отраслях
          нефтегазового комплекса, а также в хозяйственной деятельности.
        </h4>
        <AInfoCard class="card" v-bind="data" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.structure {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.left {
  padding: 0 2rem;
  flex: 1;
}
.right {
  flex: 2;
}

.card {
  padding-top: 5rem;
  width: 50%;
}

@media screen and (max-width: 600px) {
  .structure {
    display: block;
  }
  .card {
    padding: 0;
    width: 100%;
  }
  .info {
    padding: 4rem 0;
  }
  .left {
    padding: 0;
  }
}
</style>
