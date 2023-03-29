<script setup lang="ts">
import BackgroudImagedView from "../BackgroudImagedView.vue"
import BeforeAfterCard from "./BeforeAfterCard.vue"
defineProps<{
  title: string
  before: {
    text: string
    image: string
  }
  after: {
    text: string
    image: string
  }
}>()
</script>

<template>
  <div class="section structure">
    <h3 class="title green">{{ title }}</h3>
    <div class="wrapper">
      <BeforeAfterCard type="before" :text="before.text" :image="before.image" class="card" />
      <BeforeAfterCard type="after" :text="after.text" :image="after.image" class="card" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  max-width: 30rem;
}
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
}
.card {
  margin: 2rem 0;
  flex: 1;
}
@media screen and (max-width: 900px) {
  .wrapper {
    height: 100%;
  }
}
</style>
