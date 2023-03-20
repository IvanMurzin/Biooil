<script setup lang="ts">
import ALarge from "./ALarge.vue"
defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <div class="wrapper">
    <ALarge class="black">{{ title }}</ALarge>
    <h3 class="text">{{ text }}</h3>
  </div>
</template>

<style scoped lang="scss">
.text {
  margin-top: -2rem;
}

@media screen and (max-width: 600px) {
  .text {
    margin: 0;
  }
}
</style>
