<script setup lang="ts">
import ACircleCard, { CircledCard } from "./ACircleCard.vue"
defineProps<{
  title: string
  first: CircledCard
  second: CircledCard
  third: CircledCard
}>()
</script>

<template>
  <div class="section">
    <div class="structure">
      <h3 class="title green">{{ title }}</h3>
      <div class="info-list">
        <ACircleCard v-bind="first" class="card" />
        <ACircleCard v-bind="second" class="card" />
        <ACircleCard v-bind="third" class="card" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.structure {
  display: flex;
  flex-direction: column;
}

.info-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: auto;
}
.card {
  padding: 0 1rem;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 2rem;
    padding-bottom: 0;
  }
  .info-list {
    align-items: normal;
    flex-direction: column;
  }

  .card {
    padding: 1.5rem 0;
  }
}
</style>
