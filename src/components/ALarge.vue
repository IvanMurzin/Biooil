<script setup lang="ts"></script>

<template>
  <p class="large"><slot /></p>
</template>

<style scoped lang="scss">
.large {
  font-weight: 800;
  line-height: 8rem;
  font-size: 10rem;
}
@media screen and (max-width: 600px) {
  .large {
    font-size: 5rem;
    line-height: 4rem;
  }
}
</style>
