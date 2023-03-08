<script setup lang="ts">
import MainTitle from "./widgets/MainTitle.vue"
import MainTagline from "./widgets/MainTagline.vue"
import MainDescription from "./widgets/MainDescription.vue"
import MainBackground from "./widgets/MainBackground.vue"
</script>

<template>
  <div class="section">
    <MainBackground />
    <div class="wrapper limiter">
      <MainTitle class="pd-middle" />
      <MainTagline class="pd-middle" />
      <MainDescription class="pd-middle" />
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  position: relative;
  z-index: 2;
}

.pd-middle {
  padding: 70px 0;
}

@media screen and (max-width: 1300px) {
  .pd-middle {
    padding: 75px 0;
  }
}
@media screen and (max-width: 900px) {
  .pd-middle {
    padding: 80px 0;
  }
}

@media screen and (max-width: 600px) {
  .pd-middle {
    padding: 90px 0;
  }
}
@media screen and (max-width: 500px) {
  .pd-middle {
    padding: 95px 0;
  }
}
</style>
