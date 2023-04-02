<script setup lang="ts">
import image from "@/assets/images/circle.png"
</script>

<template>
  <div class="card">
    <div class="head">
      <img class="image" :src="image" />
      <h4 class="title green">Аварийные нефтяные разливы на грунте</h4>
    </div>
    <p class="text">Исходный уровень загрязнения составил 8300 мг/кг.</p>
    <p class="green">Через один месяц:</p>
    <p>Остаточное содержание нефти и продуктов её трансформации и составили 970 мг/кг Эффективность очистки - 88,3%.</p>
  </div>
</template>

<style scoped lang="scss">
.head {
  display: flex;
  flex-direction: row;
}
.image {
  width: 10rem;
}
.text {
  padding: 2rem 0;
}

@media screen and (max-width: 600px) {
  .image {
    display: none;
  }
  .text {
    padding: 0;
  }
}
</style>
