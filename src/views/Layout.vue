<script setup lang="ts">
import MainView from "./main/MainView.vue"
</script>

<template>
  <div class="main-view">
    <MainView />
  </div>
</template>

<style lang="scss">
.main-view {
  overflow: hidden;
  background-color: black;
  padding: 0 10%;
  width: 80%;
}

@media screen and (max-width: 1300px) {
  .main-view {
    padding: 0 5%;
    width: 90%;
  }
}

@media screen and (max-width: 900px) {
  .main-view {
    padding: 0 3%;
    width: 94%;
  }
}
</style>
