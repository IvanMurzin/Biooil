<script setup lang="ts">
import image1 from "@/assets/images/before2.png"
import image2 from "@/assets/images/before2.png"
import PhotoCard from "./PhotoCard.vue"
// defineProps<{
//   title: string
//   before: {
//     text: string
//     image: string
//   }
//   after: {
//     text: string
//     image: string
//   }
// }>()
const props = {
  before: {
    text: "Вынгапурское месторождение, май 2008 года. Среднее содержание нефтепродуктов 6 200 мг/кг.",
    image: image1,
  },
  after: {
    text: "Вынгапурское месторождение, август 2009 года. Среднее содержание нефтепродуктов 590 мг/кг.",
    image: image2,
  },
  title: "Вынгапурское месторождение",
}
</script>

<template>
  <div class="section structure">
    <h3 class="title green">{{ props.title }}</h3>
    <div class="wrapper">
      <div class="text">
        <div class="text-wrapper">
          <h4 class="green">Фото до:</h4>
          <p>{{ props.before.text }}</p>
        </div>
        <div class="text-wrapper">
          <h4 class="green">Фото после:</h4>
          <p>{{ props.after.text }}</p>
        </div>
      </div>
      <div class="photos">
        <PhotoCard type="before" :image="props.before.image" class="photo-card" />
        <PhotoCard type="after" :image="props.after.image" class="photo-card" />
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
  align-items: center;
  flex: 3;
}

.photo-card {
  flex: 1;
  margin: 0 0.5rem;
}

@media screen and (max-width: 900px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
