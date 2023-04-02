<script setup lang="ts">
import ALarge from "../ALarge.vue"
const props = defineProps<{
  type: "before" | "after"
  image: string
}>()
const isBefore = props.type == "before"
</script>

<template>
  <div class="card">
    <ALarge class="before-after green" v-if="isBefore">до</ALarge>
    <ALarge class="before-after green" v-else>после</ALarge>
    <img class="image" :src="image" />
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  position: relative;
}
.before-after {
  width: 14rem;
  position: relative;
  margin-left: -2rem;
  margin-bottom: -2rem;
  z-index: 2;
}
.image {
  flex: 2;
  position: relative;
  height: 22rem;
  width: auto;
}

@media screen and (max-width: 900px) {
  .before-after {
    margin: 0 0 1rem 0;
    font-size: 5rem;
    line-height: 4rem;
  }
  .image {
    height: auto;
    width: 35vw;
    flex: auto;
  }
}
</style>
