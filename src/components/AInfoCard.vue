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
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.index {
  line-height: 8rem;
  font-size: 10rem;
}
.title {
  width: 60%;
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
  .index {
    font-size: 5rem;
    line-height: 4rem;
  }
  .title {
    font-size: 2rem;
    margin-left: 1rem;
  }

  .description {
    margin: 2vh 0;
  }
}
</style>
