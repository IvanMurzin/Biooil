<script setup lang="ts">
import image1 from "@/assets/images/before2.png"
import image2 from "@/assets/images/after2.png"
import { Splide, SplideSlide } from "@splidejs/vue-splide"
import "@splidejs/vue-splide/css"
import BackgroudImagedView from "@/components/ABackgroudImaged.vue.js"
import BeforeAfterVerticalView from "@/components/beforeafter/BeforeAfterVerticalView.vue"
const data = [
  {
    before: {
      text: "Станция «Новки-1» Горьковской железной дороги. Июнь 2021 года. Среднее содержание нефтепродуктов 6 150 мг/кг.",
      image: image1,
    },
    after: {
      text: "Станция «Новки-1» Горьковской железной дороги. Июль 2021 года. Среднее содержание нефтепродуктов 669 мг/кг.",
      image: image2,
    },
    title: "Станция «Новки-1» Горьковской железной дороги",
  },
  {
    before: {
      text: "Станция «Новки-1» Горьковской железной дороги. Июнь 2021 года. Среднее содержание нефтепродуктов 6 150 мг/кг.",
      image: image1,
    },
    after: {
      text: "Станция «Новки-1» Горьковской железной дороги. Июль 2021 года. Среднее содержание нефтепродуктов 669 мг/кг.",
      image: image2,
    },
    title: "Станция «Новки-1» Горьковской железной дороги",
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
      <BeforeAfterVerticalView :title="d.title" :before="d.before" :after="d.after" />
    </SplideSlide>
  </Splide>
</template>

<style scoped lang="scss"></style>
