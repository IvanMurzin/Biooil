<script setup lang="ts">
import MainView from "./main/MainView.vue"
import InfoView from "./info/InfoView.vue"
import FloodView from "./flood/FloodView.vue"
import RecoverView from "./recover/RecoverView.vue"
import NecessityView from "./necessity/NecessityView.vue"
import DocumentView from "./document/DocumentView.vue"
import ClearedView from "./cleared/ClearedView.vue"
import SertificateView from "./sertificates/SertificatesView.vue"
import ProductionView from "./production/ProductionView.vue"
import DrugView from "./drug/DrugView.vue"
import StrainsView from "./strains/StrainsView.vue"
import ChemicalView from "./chemical/ChemicalView.vue"
import FirstCircledView from "./circled/FirstCircledView.vue"
import RailwayView from "./railway/RailwayView.vue"
import PatentView from "./document/patent/PatentView.vue"
import ExperiseView from "./document/expertise/ExpertiseView.vue"
import FirstBeforeAfterView from "./beforeafter/FirstBeforeAfterView.vue"
import SecondBeforeAfterView from "./beforeafter/SecondBeforeAfterView.vue"
import FirstBeforeAfterVerticalView from "./beforeafter/FirstBeforeAfterVerticalView.vue"
import SecondBeforeAfterVerticalView from "./beforeafter/SecondBeforeAfterVerticalView.vue"
// import { Splide, SplideSlide } from "@splidejs/vue-splide"
// import "@splidejs/vue-splide/css"
const pages = [
  MainView,
  InfoView,
  FloodView,
  RecoverView,
  NecessityView,
  PatentView,
  ExperiseView,
  ClearedView,
  FirstBeforeAfterView,
  SecondBeforeAfterView,
  FirstBeforeAfterVerticalView,
  SecondBeforeAfterVerticalView,
  SertificateView,
  ProductionView,
  StrainsView,
  ChemicalView,
  FirstCircledView,
  RailwayView,
  DrugView,
  DocumentView,
]
</script>

<template>
  <!-- <Splide
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
  > -->
  <!-- <SplideSlide v-for="(p, i) of pages" :key="i"> -->
  <component v-for="(p, i) of pages" :key="i" :is="p" />
  <!-- </SplideSlide> -->
  <!-- </Splide> -->
</template>

<style scoped lang="scss"></style>
