<script setup lang="ts">
import BeforeAfterVerticalView from "@/components/beforeafter/BeforeAfterVerticalView.vue"
import image1 from "@/assets/images/third_before_vertical.png"
import image2 from "@/assets/images/third_after_vertical.png"
import ABackgroudImage from "@/components/ABackgroudImage.vue"
const title = "Станция «Инская» Западно-Сибирской железной дороги"
const before = {
  text: "Станция «Инская» Западно-Сибирской железной дороги. Сентябрь 2022 года. Среднее содержание нефтепродуктов 149 000 мг/кг.",
  image: image1,
}
const after = {
  text: "Станция «Инская» Западно-Сибирской железной дороги. Сентябрь 2022 года. Среднее содержание нефтепродуктов  860 мг/кг.",
  image: image2,
}

const hint = "ОЧИСТКА ЩЕБЕНОЧНОГО БАЛЛАСТА ЖЕЛЕЗНОДОРОЖНЫХ ПУТЕЙ, ЗАГРЯЗНЕННОГО НЕФТЕПРОДУКТАМИ, БЕЗ ВЫЕМКИ ЩЕБНЯ"
</script>

<template>
  <div style="position: relative">
    <ABackgroudImage />
    <BeforeAfterVerticalView :title="title" :before="before" :after="after" :hint="hint" />
  </div>
</template>

<style scoped lang="scss"></style>
