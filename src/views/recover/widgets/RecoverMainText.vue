<script setup lang="ts"></script>

<template>
  <div class="main">
    <h3 class="first">до</h3>
    <h3 class="number green">30</h3>
    <h3 class="last">лет занимает самовосстановление почв</h3>
  </div>
</template>

<style scoped lang="scss">
.main {
  align-items: flex-end;
  display: flex;
}
.number {
  z-index: -1;
  margin: 0 -1rem;
  line-height: 8rem;
  font-size: 10rem;
}

@media screen and (max-width: 600px) {
  .number {
    margin: 0;
    font-size: 5rem;
    line-height: 4rem;
  }
  h3 {
    font-size: 2rem;
  }
}
</style>
