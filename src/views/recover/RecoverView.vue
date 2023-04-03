<script setup lang="ts">
import AFooterImage from "../../components/AFooterImage.vue"
import RecoverMainText from "./widgets/RecoverMainText.vue"
import RecoverInfo from "./widgets/RecoverInfo.vue"
import ASeparateView from "../../components/ASeparateView.vue"
import image from "@/assets/images/polution.png"
</script>

<template>
  <div class="section">
    <ASeparateView class="structure">
      <template #left>
        <h3 class="green">Тысячи нефтеразливов в&nbsp;год</h3>
      </template>
      <template #right>
        <h4 class="info">
          Нефть и нефтепродукты являются наиболее распространёнными загрязнителями природных экосистем и наиболее
          вредными химическими загрязнителями.
        </h4>
        <RecoverMainText class="main-text" />
        <RecoverInfo />
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

.footer-image {
  flex: 1;
}

.main-text {
  padding: 3rem 0;
}

@media screen and (max-width: 600px) {
  .info {
    padding: 2rem 0;
  }
  .main-text {
    padding: 0;
  }
}
</style>
