<script setup lang="ts">
import BeforeAfterVerticalView from "@/components/beforeafter/BeforeAfterVerticalView.vue"
import image1 from "@/assets/images/second_before_vertical.png"
import image2 from "@/assets/images/second_after_vertical.png"
import ABackgroudImage from "@/components/ABackgroudImage.vue"
const title = "Станция «Татарская» Западно-Сибирской железной дороги"
const before = {
  text: "Станция «Татарская» Западно-Сибирской железной дороги. Июль 2021 года. Среднее содержание нефтепродуктов 9\xa0355 мг/кг.",
  image: image1,
}
const after = {
  text: "Станция «Татарская» Западно-Сибирской железной дороги. Сентябрь 2021 года. Среднее содержание нефтепродуктов 586 мг/кг.",
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
