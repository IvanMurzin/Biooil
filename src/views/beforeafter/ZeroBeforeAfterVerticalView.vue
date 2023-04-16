<script setup lang="ts">
import BeforeAfterVerticalView from "@/components/beforeafter/BeforeAfterVerticalView.vue"
import image1 from "@/assets/images/zero_before_vertical.png"
import image2 from "@/assets/images/zero_after_vertical.png"
import ABackgroudImage from "@/components/ABackgroudImage.vue"

const title = "Станция «Новки-1» Горьковской железной дороги"
const before = {
  text: "Станция «Новки-1» Горьковской железной дороги. Июнь 2021 года. Среднее содержание нефтепродуктов 6\xa0150 мг/кг.",
  image: image1,
}
const after = {
  text: "Станция «Новки-1» Горьковской железной дороги. Июль 2021 года. Среднее содержание нефтепродуктов 669 мг/кг.",
  image: image2,
}
</script>

<template>
  <div style="position: relative">
    <ABackgroudImage />
    <BeforeAfterVerticalView :title="title" :before="before" :after="after" />
  </div>
</template>

<style scoped lang="scss"></style>
