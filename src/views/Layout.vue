<script setup lang="ts">
import MainView from "./main/MainView.vue"
import InfoView from "./info/InfoView.vue"
import FloodView from "./flood/FloodView.vue"
import RecoverView from "./recover/RecoverView.vue"
import VueCarousel from "@chenfengyuan/vue-carousel"
const data = [MainView, InfoView, FloodView, RecoverView]
</script>

<template>
  <vue-carousel
    :data="data"
    :controls="false"
    :indicators="true"
    :autoplay="false"
    direction="up"
    :slideOnSwipe="true"
  />
</template>

<style scoped lang="scss"></style>
