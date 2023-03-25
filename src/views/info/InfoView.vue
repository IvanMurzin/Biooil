<script setup lang="ts">
import InfoTitle from "./widgets/InfoTitle.vue"
import InfoList from "./widgets/InfoList.vue"
</script>

<template>
  <div class="section">
    <div class="structure">
      <InfoTitle />
      <InfoList />
    </div>
  </div>
</template>

<style scoped lang="scss">
.structure {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
