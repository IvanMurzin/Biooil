<script setup lang="ts">
defineProps({
  image: String,
})
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
  height: 35vh;
}

@media screen and (max-width: 900px) {
  .image {
    width: fit-content;
  }
}
</style>
