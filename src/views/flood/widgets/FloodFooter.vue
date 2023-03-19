<script setup lang="ts">
import image from "@/assets/images/flood_image.png"
</script>

<template>
  <img class="image" :src="image" />
</template>

<style scoped lang="scss">
.image {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 30vh;
}
</style>
