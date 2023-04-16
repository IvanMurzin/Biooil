<script setup lang="ts">
import PhotoCard from "./PhotoCard.vue"
defineProps<{
  title: string
  hint?: string
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
    <p class="hint" v-if="!!hint">{{ hint }}</p>
    <div class="wrapper">
      <div class="text">
        <div class="text-wrapper">
          <h4 class="green">Фото до:</h4>
          <p>{{ before.text }}</p>
        </div>
        <div class="text-wrapper">
          <h4 class="green">Фото после:</h4>
          <p>{{ after.text }}</p>
        </div>
      </div>
      <div class="photos">
        <PhotoCard type="before" :image="before.image" class="photo-card" />
        <PhotoCard type="after" :image="after.image" class="photo-card" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title {
  max-width: 30rem;
}
.hint {
  max-width: 50vw;
  padding: 2rem 0;
}

.text {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: 2rem;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.wrapper {
  display: flex;
  height: 80%;
}

.photos {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 3;
  @media (max-width: 1300px) {
    align-items: center;
  }
}


.photo-card {
  margin: 0 0.5rem;
}

@media screen and (max-width: 900px) {
  .hint {
    padding: 1rem 0;
    max-width: 100vw;
  }
  .wrapper {
    flex-direction: column;
  }

  .photos {
    justify-content: flex-start;
  }
}
</style>
