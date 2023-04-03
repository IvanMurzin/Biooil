<script setup lang="ts">
import BeforeAfterView from "@/components/beforeafter/BeforeAfterView.vue"
import image1 from "@/assets/images/second_before.png"
import image2 from "@/assets/images/second_after.png"
import ABackgroudImage from "@/components/ABackgroudImage.vue"
const title = "Вынгапурское месторождение"
const before = {
  text: "Вынгапурское месторождение, май 2008 года. Среднее содержание нефтепродуктов 6 200 мг/кг.",
  image: image1,
}
const after = {
  text: "Вынгапурское месторождение, август 2009 года. Среднее содержание нефтепродуктов 590 мг/кг.",
  image: image2,
}
</script>

<template>
  <div style="position: relative">
    <ABackgroudImage />
    <BeforeAfterView :title="title" :before="before" :after="after" />
  </div>
</template>

<style scoped lang="scss"></style>
