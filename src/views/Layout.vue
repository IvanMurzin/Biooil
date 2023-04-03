<script setup lang="ts">
import MainView from "./main/MainView.vue"
import InfoView from "./info/InfoView.vue"
import FloodView from "./flood/FloodView.vue"
import RecoverView from "./recover/RecoverView.vue"
import NecessityView from "./necessity/NecessityView.vue"
import DocumentView from "./document/DocumentView.vue"
import ClearedView from "./cleared/ClearedView.vue"
import ProductionView from "./production/ProductionView.vue"
import DrugView from "./drug/DrugView.vue"
import StrainsView from "./strains/StrainsView.vue"
import ChemicalView from "./chemical/ChemicalView.vue"
import FirstCircledView from "./circled/FirstCircledView.vue"
import SecondCircledView from "./circled/SecondCircledView.vue"
import RailwayView from "./railway/RailwayView.vue"
import PatentView from "./document/patent/PatentView.vue"
import EffectivitelyView from "./document/effectivitely/EffectivitelyView.vue"
import ExperiseView from "./document/expertise/ExpertiseView.vue"
import FirstBeforeAfterView from "./beforeafter/FirstBeforeAfterView.vue"
import SecondBeforeAfterView from "./beforeafter/SecondBeforeAfterView.vue"
import FirstBeforeAfterVerticalView from "./beforeafter/FirstBeforeAfterVerticalView.vue"
import SecondBeforeAfterVerticalView from "./beforeafter/SecondBeforeAfterVerticalView.vue"
import ThirdBeforeAfterVerticalView from "./beforeafter/ThirdBeforeAfterVerticalView.vue"
import FirstSertificateView from "./sertificates/FirstSertificateView.vue"
import SecondSertificateView from "./sertificates/SecondSertificateView.vue"
import ThirdSertificateView from "./sertificates/ThirdSertificateView.vue"
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
  FirstSertificateView,
  SecondSertificateView,
  ProductionView,
  DrugView,
  StrainsView,
  ThirdSertificateView,
  EffectivitelyView,
  ChemicalView,
  FirstCircledView,
  SecondCircledView,
  RailwayView,
  ThirdBeforeAfterVerticalView,
]
</script>

<template>
  <div style="overflow: hidden">
    <component v-for="(p, i) of pages" :key="i" :is="p" />
  </div>
</template>

<style scoped lang="scss"></style>
