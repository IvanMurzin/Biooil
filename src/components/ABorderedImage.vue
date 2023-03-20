<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <img class="image" :src="image" alt=""/>
</template>

<style scoped lang="scss">
.image {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #050605;
}
</style>
