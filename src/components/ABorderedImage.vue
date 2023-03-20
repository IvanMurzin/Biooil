<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <img class="image" :src="image" />
</template>

<style scoped lang="scss">
.image {
  max-width: 100%;
  max-height: 100%;
  border: 12px solid var(--color-black);
}
</style>
