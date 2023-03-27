<script setup lang="ts">
import ALarge from "./ALarge.vue"
export interface InfoItem {
  index: number
  title: string
  description: string
  largeTitle?: boolean
}

defineProps<InfoItem>()
</script>

<template>
  <div class="card">
    <div class="header">
      <ALarge class="green">{{ index }}</ALarge>
      <h2 v-if="!!largeTitle" class="title">{{ title }}</h2>
      <h4 v-else class="title">{{ title }}</h4>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.title {
  width: 60%;
  font-weight: 600;
  margin-left: -2rem;
}

.description {
  margin-top: 3vh;
}

@media screen and (max-width: 900px) {
  .title {
    width: 80%;
  }
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 2rem;
    margin-left: 1rem;
  }

  .description {
    margin: 2vh 0;
  }
}
</style>
