<script setup lang="ts">
defineProps<{
  image1: string
  image2: string
}>()
</script>

<template>
  <div class="section">
    <div class="structure">
      <img class="image" :src="image1" alt="" />
      <img class="image" :src="image2" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.structure {
  min-height: 100vh !important;
  height: unset;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: space-around;
}

.image {
  display: block;
  flex: 1;
  max-width: 500px;
  max-height: 100%;
  width: 35vw;
  height: auto;
  margin: 0 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #050605;
}

@media screen and (max-width: 600px) {
  .structure {
    flex-direction: column;
  }
  .image {
    max-width: 100%;
    max-height: 40vh;
    width: auto;
  }
}
</style>
