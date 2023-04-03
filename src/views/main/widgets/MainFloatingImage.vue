<script setup lang="ts">
import image from "@/assets/images/forest.jpg"
</script>

<template>
  <div class="image-wrapper">
    <img class="image" :src="image" />
  </div>
</template>

<style scoped lang="scss">
.image-wrapper {
  position: absolute;
  top: 50%;
  bottom: 0;
  left: -4rem;
  transform: translateY(-50%);
  height: 70vh;
  z-index: 1;
}
.image {
  filter: saturate(300%);
  height: 100%;
}

@media screen and (max-width: 600px) {
  .image-wrapper {
    display: none;
  }
}
</style>
