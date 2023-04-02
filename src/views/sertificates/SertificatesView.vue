<script setup lang="ts">
import VueCarousel from "@chenfengyuan/vue-carousel"
import FirstSertificateView from "./FirstSertificateView.vue"
import SecondSertificateView from "./SecondSertificateView.vue"

const data = [FirstSertificateView, SecondSertificateView]
</script>

<template>
  <VueCarousel :data="data" :controls="true" :indicators="true" :autoplay="false" :slideOnSwipe="true" />
</template>

<style scoped lang="scss"></style>
