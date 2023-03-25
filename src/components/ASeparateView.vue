<script setup lang="ts"></script>

<template>
  <div class="separator">
    <div class="left"><slot name="left" /></div>
    <div class="right"><slot name="right" /></div>
  </div>
</template>

<style scoped lang="scss">
.separator {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.left {
  padding: 0 2rem;
  flex: 1;
}
.right {
  flex: 2;
}

@media screen and (max-width: 600px) {
  .separator {
    display: block;
  }
  .left {
    padding: 0;
  }
}
</style>
