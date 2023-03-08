<script setup lang="ts">
import image from "@/assets/main_background.jpg"
</script>

<template>
  <div class="background">
    <img class="bg-image" :src="image" />
  </div>
</template>

<style lang="scss">
.background {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
}
.bg-image {
  height: 100%;
}

@media screen and (max-width: 600px) {
  .background {
    left: 20%;
  }
}
</style>
