<script setup lang="ts">
export interface TitleTextSmall {
  title: string
  text: string
}

defineProps<TitleTextSmall>()
</script>

<template>
  <div class="wrapper">
    <h3 class="title">{{ title }}</h3>
    <p class="text">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding-bottom: 2rem;
}
</style>
