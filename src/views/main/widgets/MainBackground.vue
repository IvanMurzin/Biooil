<script setup lang="ts">
import ABackgroudImage from "@/components/ABackgroudImage.vue"
import MainFloatingImage from "./MainFloatingImage.vue"
</script>

<template>
  <ABackgroudImage>
    <MainFloatingImage />
  </ABackgroudImage>
</template>

<style scoped lang="scss">
.bg-image {
  filter: saturate(300%);
  height: 100%;
}
</style>
