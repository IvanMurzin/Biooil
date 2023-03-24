<script setup lang="ts">
import MainView from "./main/MainView.vue"
import InfoView from "./info/InfoView.vue"
import FloodView from "./flood/FloodView.vue"
import RecoverView from "./recover/RecoverView.vue"
import NecessityView from "./necessity/NecessityView.vue"
import DocumentView from "./document/DocumentView.vue"
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
  <component v-for="d in data" :is="d" />
</template>

<style scoped lang="scss"></style>
