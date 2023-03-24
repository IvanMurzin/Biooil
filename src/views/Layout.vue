<script setup lang="ts">
import MainView from "./main/MainView.vue"
import InfoView from "./info/InfoView.vue"
import FloodView from "./flood/FloodView.vue"
import RecoverView from "./recover/RecoverView.vue"
import NecessityView from "./necessity/NecessityView.vue"
import DocumentView from "./document/DocumentView.vue"
import { Splide, SplideSlide } from "@splidejs/vue-splide"
import "@splidejs/vue-splide/css"
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
    }"
  >
    <SplideSlide><MainView /></SplideSlide>
    <SplideSlide><InfoView /></SplideSlide>
    <SplideSlide><FloodView /></SplideSlide>
    <SplideSlide><RecoverView /></SplideSlide>
    <SplideSlide><NecessityView /></SplideSlide>
    <SplideSlide><DocumentView /></SplideSlide>
  </Splide>
</template>

<style scoped lang="scss"></style>
