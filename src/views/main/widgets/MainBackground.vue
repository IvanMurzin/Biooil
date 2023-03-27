<script setup lang="ts">
import BackgroudImagedView from "@/components/BackgroudImagedView.vue"
import MainFloatingImage from "./MainFloatingImage.vue"
</script>

<template>
  <BackgroudImagedView>
    <MainFloatingImage />
  </BackgroudImagedView>
</template>

<style scoped lang="scss">
.bg-image {
  filter: saturate(300%);
  height: 100%;
}
</style>
