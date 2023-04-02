<script setup lang="ts">
import MainView from "./main/MainView.vue"
import InfoView from "./info/InfoView.vue"
import FloodView from "./flood/FloodView.vue"
import RecoverView from "./recover/RecoverView.vue"
import NecessityView from "./necessity/NecessityView.vue"
import DocumentView from "./document/DocumentView.vue"
import ClearedView from "./cleared/ClearedView.vue"
import { Splide, SplideSlide } from "@splidejs/vue-splide"
import BeforeAfterCarousel from "./beforeafter/BeforeAfterCarousel.vue"
import BeforeAfterVerticalCarousel from "./beforeafter/BeforeAfterVerticalCarousel.vue"
import "@splidejs/vue-splide/css"
const pages = [
  MainView,
  InfoView,
  FloodView,
  RecoverView,
  NecessityView,
  ClearedView,
  BeforeAfterCarousel,
  BeforeAfterVerticalCarousel,
  DocumentView,
]
</script>

<template>
  <Splide
    :options="{
      direction: 'ttb',
      wheel: true,
      height: '100vh',
      speed: 800,
      arrows: false,
      wheelMinThreshold: 10,
      wheelSleep: 1000,
      autoHeight: true,
    }"
  >
    <SplideSlide v-for="(p, i) of pages" :key="i"><component :is="p" /></SplideSlide>
  </Splide>
</template>

<style scoped lang="scss"></style>
