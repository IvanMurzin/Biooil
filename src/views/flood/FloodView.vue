<script setup lang="ts">
import AInfoCard, { type InfoItem } from "../../components/AInfoCard.vue"
import image from "@/assets/images/flood_image.png"
import AFooterImage from "../../components/AFooterImage.vue"
import ASeparateView from "../../components/ASeparateView.vue"

const data: InfoItem = {
  index: 45,
  title: "млн.тонн потеря\xa0нефти",
  description:
    "Согласно экспертным оценкам, потери нефти в мире при ее добыче, переработке и использовании превышают 45 млн. тонн в год, или 2% от ее добычи.",
}
</script>

<template>
  <div class="section">
    <ASeparateView class="structure">
      <template #left>
        <h3 class="green">Тысячи нефтеразливов в&nbsp;год</h3>
      </template>
      <template #right>
        <h4 class="info">
          Загрязнение природных экосистем нефтью и нефтепродуктами происходит на всех этапах работ и во всех отраслях
          нефтегазового комплекса, а также в хозяйственной деятельности.
        </h4>
        <AInfoCard class="card" v-bind="data" />
      </template>
    </ASeparateView>
    <AFooterImage class="footer-image" :image="image" />
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
.structure {
  height: unset;
  padding-bottom: 4vh;
}
.card {
  padding-top: 5rem;
  width: 50%;
}
.footer-image {
  flex: 1;
}
@media screen and (max-width: 600px) {
  .card {
    padding: 0;
    width: 100%;
  }
  .info {
    padding: 4rem 0;
  }
}
</style>
