<script setup lang="ts">
import ASertificate from "@/components/ASertificate.vue"
import image1 from "@/assets/images/sertificate3.png"
import image2 from "@/assets/images/sertificate4.png"
</script>

<template>
  <div class="background">
    <ASertificate :image1="image1" :image2="image2" />
  </div>
</template>

<style scoped lang="scss">
.background {
  background-image: url("@/assets/images/forest_background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
