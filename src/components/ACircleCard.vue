<script setup lang="ts">
export interface CircledCard {
  title: string
  text: string
  time: string
  description: string
  image: string
}
defineProps<CircledCard>()
</script>

<template>
  <div class="card">
    <div class="head">
      <img class="image" :src="image" />
      <h4 class="title green">{{ title }}</h4>
    </div>
    <p class="text">{{ text }}</p>
    <p class="green">{{ time }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.head {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.image {
  margin-right: 1rem;
  width: 10rem;
}
.text {
  padding: 2rem 0;
}

@media screen and (max-width: 600px) {
  .image {
    display: none;
  }
  .text {
    padding: 0;
  }
}
</style>
