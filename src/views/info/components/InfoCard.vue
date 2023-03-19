<script setup lang="ts">
export interface InfoItem {
  index: number
  title: string
  description: string
}

defineProps<InfoItem>()
</script>

<template>
  <div class="card">
    <div class="header">
      <h1 class="index green">{{ index }}</h1>
      <h4 class="title">{{ title }}</h4>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.index {
  font-weight: 900;
  font-size: 10rem;
}
.title {
  width: 65%;
  margin-left: 3.5rem;
  transform: translateY(-50%);
}

@media screen and (max-width: 900px) {
  .title {
    width: 80%; // for third title new line
  }
}

@media screen and (max-width: 600px) {
  .index {
    font-size: 5rem;
  }
  .title {
    font-size: 2rem;
  }
}

.description {
  margin-top: 3vh;
}
</style>
