<script setup lang="ts">
import ALarge from "@/components/ALarge.vue"
</script>

<template>
  <div>
    <div class="wrapper">
      <h2 class="prefix">от</h2>
      <ALarge class="text black">+1°С</ALarge>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: flex-end;
}
.prefix {
  font-weight: 600;
}
.text {
  padding: 1rem 0;
  margin-left: -2rem;
}

@media screen and (max-width: 900px) {
  .text {
    font-size: 8rem;
    line-height: 6rem;
  }
}

@media screen and (max-width: 600px) {
  .wrapper {
    justify-content: center;
  }

  .text {
    font-size: 6rem;
    line-height: 4rem;
  }
}
</style>
