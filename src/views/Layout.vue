<script setup lang="ts">
import MainView from "./main/MainView.vue"
import InfoView from "./info/InfoView.vue"
import FloodView from "./flood/FloodView.vue"
import RecoverView from "./recover/RecoverView.vue"
import NecessityView from "./necessity/NecessityView.vue"
import DocumentView from "./document/DocumentView.vue"
import { Splide, SplideSlide } from "@splidejs/vue-splide"
// Default theme
import "@splidejs/vue-splide/css"

// or other themes
// import '@splidejs/vue-splide/css/skyblue';
// import "@splidejs/vue-splide/css/sea-green"

// or only core styles
// import '@splidejs/vue-splide/css/core';
const data = [MainView, InfoView, FloodView, RecoverView, NecessityView, DocumentView]
</script>

<template>
  <!-- <vue-carousel
    :data="data"
    :controls="true"
    :indicators="true"
    :autoplay="false"
    direction="up"
    :slideOnSwipe="true"
  /> -->
  <Splide :options="{ direction: 'ttb', wheel: true, height: '100vh', speed: 800, arrows: false, wheelMinThreshold: 10, wheelSleep: 1000 }">
    <SplideSlide><MainView /></SplideSlide>
    <SplideSlide><InfoView /></SplideSlide>
    <SplideSlide><FloodView /></SplideSlide>
    <SplideSlide><RecoverView /></SplideSlide>
    <SplideSlide><NecessityView /></SplideSlide>
    <SplideSlide><DocumentView /></SplideSlide>
  </Splide>
  <!-- <component v-for="d in data" :is="d" /> -->
</template>

<style scoped lang="scss"></style>
