<script setup lang="ts"></script>

<template>
  <div class="header">
    <h3 class="title green">Тысячи нефтеразливов в&nbsp;год</h3>
    <h4 class="info">
      Загрязнение природных экосистем нефтью и нефтепродуктами происходит на всех этапах работ и во всех отраслях
      нефтегазового комплекса, а также в хозяйственной деятельности.
    </h4>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
}
.title {
  flex: 1;
  padding: 0 2rem;
}
.info {
  flex: 2;
}

@media screen and (max-width: 600px) {
  .header {
    flex-direction: column;
  }

  .title {
    padding: 0 0 2rem 0;
  }
}
</style>
