<script setup lang="ts">
import ACircleCard from "./ACircleCard.vue"
</script>

<template>
  <div class="section">
    <div class="structure">
      <h3 class="title green">
        Эффективность применения биопрепарата «Биоойл-АА» для биоремедиации загрязненных нефтью грунтов и вод в
        различных модельных средах
      </h3>
      <div class="info-list">
        <ACircleCard class="card" />
        <ACircleCard class="card" />
        <ACircleCard class="card" />
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
    padding-bottom: 2rem;
  }
  .info-list {
    align-items: normal;
    flex-direction: column;
  }

  .card {
    padding: 2rem 0;
  }
}
</style>
