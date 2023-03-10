<script setup lang="ts">
import image from "@/assets/images/main_background.jpg"
import MainFloatingImage from "./MainFloatingImage.vue"
</script>

<template>
  <div class="background">
    <img class="bg-image" :src="image" />
    <MainFloatingImage />
  </div>
</template>

<style scoped lang="scss">
.background {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
}
.bg-image {
  filter: saturate(300%);
  height: 100%;
}

@media screen and (max-width: 600px) {
  .background {
    left: 20%;
  }
}
</style>
