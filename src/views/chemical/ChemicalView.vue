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
          <AChemicalCard text="+1°С" />
          <AChemicalCard text="+38°С" />
          <p class="text">Температурный диапазон</p>
        </div>
        <div class="card">
          <AChemicalCard text="pH&nbsp;3,5" />
          <AChemicalCard text="pH&nbsp;8,0" />
          <p class="text">Кислотность почв</p>
        </div>
        <div class="card">
          <AChemicalCard text="30‰" style="visibility: hidden" />
          <AChemicalCard text="30‰" />
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
}
</style>
