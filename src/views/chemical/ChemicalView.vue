<script setup lang="ts">
import AChemicalCard from "./widgets/AChemicalCard.vue"
</script>

<template>
  <div class="section">
    <div class="structure">
      <h3 class="title">
        Биопрепарат «Биоойл-АА» разработан для применения на территории Российской федерации и работает в широком
        диапазоне природных условий окружающей среды
      </h3>
      <div class="info-list">
        <div class="card">
          <AChemicalCard />
          <AChemicalCard />
          <p class="text">Температурный диапазон</p>
        </div>
        <div class="card">
          <AChemicalCard />
          <AChemicalCard />
          <p class="text">Кислотность почв</p>
        </div>
        <div class="card">
          <AChemicalCard style="visibility: hidden" />
          <AChemicalCard />
          <p class="text">Соленость морей</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  background-color: var(--color-green);
}
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
  flex: 1;
}

.text {
  padding: 1rem 0;
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
  .text {
    text-align: center;
  }
}
</style>
