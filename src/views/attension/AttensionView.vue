<script setup lang="ts">
import MainTitle from "../main/widgets/MainTitle.vue"
</script>

<template>
  <div class="section">
    <div class="structure">
      <MainTitle />
      <div class="tagline">
        <h2 class="green">Благодарим</h2>
        <h1 class="name white">ЗА ВНИМАНИЕ!</h1>
      </div>
      <p>
        ООО «Биоойл» 630559,<br />
        Новосибирская область, рабочий поселок Кольцово,<br />
        ул. Технопарковая, стр. 8, помещение Б104<br />
        e-mail: <a href="mailto:biooil.ru@mail.ru">biooil.ru@mail.ru</a><br />
        телефон: +79059465553
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mail {
  display: inline;
}
a {
  font-size: inherit;
  color: white;
}
.structure {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 2;
}
.section {
  background-image: url("@/assets/images/forest_background.png");
}

.green {
  font-weight: 500;
  text-shadow: 1px 1px 15px var(--color-black), 10px 0 20px var(--color-black), 10px 0 20px var(--color-black),
    5px 5px 20px var(--color-black);
}
.white {
  text-shadow: 0 0 10px var(--color-black), 5px 0 10px var(--color-black), 10px 0 20px var(--color-black),
    5px 5px 10px var(--color-black);
}

@media screen and (max-width: 600px) {
  .name {
    font-size: 4.5rem;
  }
}
</style>
