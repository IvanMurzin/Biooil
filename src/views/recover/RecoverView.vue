<script setup lang="ts">
import AFooterImage from "../../components/AFooterImage.vue"
import image from "@/assets/images/recover_image.png"
import RecoverMainText from "./widgets/RecoverMainText.vue"
import RecoverInfo from "./widgets/RecoverInfo.vue"
</script>

<template>
  <div class="section">
    <AFooterImage :image="image" />
    <div class="structure">
      <div class="left">
        <h3 class="green">Тысячи нефтеразливов в&nbsp;год</h3>
      </div>
      <div class="right">
        <h4 class="info">
          Нефть и нефтепродукты являются наиболее распространёнными загрязнителями природных экосистем и наиболее
          вредными химическими загрязнителями.
        </h4>
        <RecoverMainText class="main-text" />
        <RecoverInfo />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.structure {
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

.main-text {
  padding: 3rem 0;
}

@media screen and (max-width: 600px) {
  .structure {
    display: block;
  }
  .info {
    padding: 2rem 0;
  }
  .left {
    padding: 0;
  }
  .main-text {
    padding: 0;
  }
}
</style>
