<script setup lang="ts">
import ALarge from "@/components/ALarge.vue"
withDefaults(defineProps<{
  text: string
  prefics?: string
}>(), {
  prefics: "от"
})
</script>

<template>
  <div>
    <div class="wrapper">
      <h2 class="prefix">{{ prefics }}</h2>
      <ALarge class="text black">{{ text }}</ALarge>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: flex-end;
}
.prefix {
  position: relative;
  font-weight: 600;
  z-index: 2;
}
.text {
  padding: 1rem 0;
  margin-left: -2rem;
  font-size: 8rem;
  line-height: 6rem;
}
@media screen and (max-width: 900px) {
  .text {
    font-size: 6rem;
    line-height: 4rem;
  }
}
@media screen and (max-width: 600px) {
  .text {
    margin: 0 0 0 2rem;
    font-size: 6rem;
    line-height: 4rem;
  }
}
</style>
