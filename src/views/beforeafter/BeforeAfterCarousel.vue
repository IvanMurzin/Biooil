<script setup lang="ts">
import BeforeAfterView from "@/components/beforeafter/BeforeAfterView.vue"
import image1 from "@/assets/images/before1.png"
import image2 from "@/assets/images/after1.png"
import image3 from "@/assets/images/before1.png"
import image4 from "@/assets/images/after1.png"
import { Splide, SplideSlide } from "@splidejs/vue-splide"
import "@splidejs/vue-splide/css"
import BackgroudImagedView from "@/components/ABackgroudImaged.vue.js"
const data = [
  {
    before: {
      text: "Вынгапурское месторождение, май 2008 года. Среднее содержание нефтепродуктов 6 200 мг/кг.",
      image: image1,
    },
    after: {
      text: "Вынгапурское месторождение, август 2009 года. Среднее содержание нефтепродуктов 590 мг/кг.",
      image: image2,
    },
    title: "Вынгапурское месторождение",
  },
  {
    before: {
      text: "Вынгапурское месторождение, май 2008 года. Среднее содержание нефтепродуктов 6 200 мг/кг.",
      image: image3,
    },
    after: {
      text: "Вынгапурское месторождение, август 2009 года. Среднее содержание нефтепродуктов 590 мг/кг.",
      image: image4,
    },
    title: "Вынгапурское месторождение",
  },
]
</script>

<template>
  <BackgroudImagedView />
  <Splide
    :options="{
      direction: 'ltr',
      height: '100vh',
      speed: 800,
      arrows: true,
    }"
  >
    <SplideSlide v-for="d in data">
      <BeforeAfterView :title="d.title" :before="d.before" :after="d.after" />
    </SplideSlide>
  </Splide>
</template>

<style scoped lang="scss"></style>
