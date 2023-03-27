<script setup lang="ts">
import ALarge from "../ALarge.vue"
export interface BeforeAfterCard {
  type: "before" | "after"
  text: string
  image: string
}
const props = defineProps<BeforeAfterCard>()
const isBefore = props.type == "before"
</script>

<template>
  <div class="card">
    <div class="text">
      <h4 class="green" v-if="isBefore">Фото до:</h4>
      <h4 class="green" v-else>Фото после:</h4>
      <p>{{ text }}</p>
    </div>
    <ALarge class="before-after green" v-if="isBefore">до</ALarge>
    <ALarge class="before-after green" v-else>после</ALarge>
    <img class="image" :src="image" />
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  position: relative;
  align-items: flex-end;
}
.text {
  flex: 1;
  max-width: 40rem;
}
.before-after {
  width: 14rem;
  position: relative;
  margin-right: -4rem;
  margin-left: 2rem;
  z-index: 2;
}
.image {
  flex: 2;
  position: relative;
  height: 22rem;
  width: auto;
}

@media screen and (max-width: 900px) {
  .card {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;
  }
  .text {
    flex: auto;
  }
  .before-after {
    margin: 0;
    font-size: 5rem;
    line-height: 4rem;
    flex: auto;
  }
  .image {
    height: 16rem;
    flex: auto;
  }
}
</style>
