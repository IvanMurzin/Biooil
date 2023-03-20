<script setup lang="ts">
defineProps({
  image: String,
})
</script>

<template>
  <div class="footer-image" :style="{ backgroundImage: `url(${image})` }" />
</template>

<style scoped lang="scss">
.footer-image {
  background: no-repeat center;
  background-size: cover;
  max-height: 35vh;
}
</style>
