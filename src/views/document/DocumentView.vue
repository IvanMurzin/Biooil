<script setup lang="ts">
import PatentView from "./patent/PatentView.vue"
import ExpertiseView from "./expertise/ExpertiseView.vue"
import VueCarousel from "@chenfengyuan/vue-carousel"

const data = [ExpertiseView]
</script>

<template>
  <VueCarousel :data="data" :controls="true" :indicators="true" :autoplay="false" :slideOnSwipe="true" />
</template>

<style scoped lang="scss"></style>
