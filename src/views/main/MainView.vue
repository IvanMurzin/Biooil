<script setup lang="ts">
import MainTitle from "./widgets/MainTitle.vue"
import MainTagline from "./widgets/MainTagline.vue"
import MainDescription from "./widgets/MainDescription.vue"
import MainBackground from "./widgets/MainBackground.vue"
</script>

<template>
  <div class="section">
    <MainBackground />
    <div class="structure">
      <MainTitle />
      <MainTagline />
      <MainDescription />
    </div>
  </div>
</template>

<style lang="scss">
.structure {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 2;
}
</style>
