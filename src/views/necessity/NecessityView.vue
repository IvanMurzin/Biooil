<script setup lang="ts">
import AFooterImage from "../../components/AFooterImage.vue"
import image from "@/assets/images/nessesety_image.png"
import ASeparateView from "../../components/ASeparateView.vue"
import ATitleText from "../../components/ATitleText.vue"
</script>

<template>
  <div class="section">
    <ASeparateView class="structure">
      <template #left>
        <h3>Необходимость использования биопрепаратов</h3>
      </template>
      <template #right>
        <ATitleText class="title" title="1 сезон" text="срок восстановления при применении биопрепарата." />
        <p class="text">
          Из-за огромных масштабов потерь, очистка загрязненных нефтепродуктами почв и вод в местах аварий, затруднена
          или невозможна. Биоремедиация обеспечивает экономически выгодную, высокоспецифическую очистку, приводящую к
          уменьшению концентрации нефтепродуктов в грунтах и водах, ускоряет формирование исходных растительных
          сообществ.
        </p>
      </template>
    </ASeparateView>
    <AFooterImage class="footer-image" :image="image" />
  </div>
</template>

<style scoped lang="scss">
.section {
  background-color: var(--color-green);
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

.text {
  padding: 3rem 0;
}
@media screen and (max-width: 600px) {
  .title {
    padding: 2rem 0;
  }
}
</style>
