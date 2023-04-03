<script setup lang="ts">
import image from "@/assets/images/train.png"
import ATitleText from "@/components/ATitleText.vue"
</script>

<template>
  <div class="section">
    <div class="structure">
      <h3 style="grid-area: A">
        Применение биопрепарата «Биоойл-АА» для очистки нефтезагрязнённого щебёночного балласта железнодорожных путей
      </h3>
      <ATitleText
        style="grid-area: B"
        class="card"
        title="1 месяц"
        text="срок очистки балласта пути от нефтезагрязнения"
      />
      <p class="text" style="grid-area: C">
        Испытания инновационной технологии очистки балласта пути, основанной на биологической деструкции нефтепродуктов
        биопрепаратом, без выемки и утилизации нефтезагрязненного щебня и проведением обезвреживания загрязняющих
        веществ in situ (на месте), подтвердили свою эффективность в результате испытаний на высоких уровнях свежих и
        застарелых нефтезагрязнений. Преимуществом технологии является относительная простота технологической реализации
        и эксплуатации. Использование инновационной технологии автономно и позволяет её встроить в технологический
        процесс железной дороги. Сохранение целостности верхнего строения пути позволит исключить ограничения движения
        на путях, подъезда локомотивов к ремонтным позициям.
      </p>
      <img style="grid-area: D" class="image" :src="image" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.section {
  background-color: var(--color-green);
}
.structure {
  align-items: center;
  justify-items: end;
  display: grid;
  grid-template-areas:
    "A A A A   A A B B   B B B B"
    "C C C C   C C C C   D D D D"
    "C C C C   C C C C   D D D D";
}

.image {
  display: block;
  width: 80%;
  aspect-ratio: 296 / 420;
  font-size: 0;
}

.text {
  padding-right: 2rem;
}

@media screen and (max-width: 900px) {
  .structure {
    align-items: start;
    grid-template-areas:
      "A A A A   A A A A   A A A A"
      "B B B B   B B B B   B B B B"
      "C C C C   C C D D   D D D D";
  }
}
@media screen and (max-width: 600px) {
  .structure {
    height: unset;
    display: block;
  }
  .card {
    padding: 2rem 0;
  }
  .text {
    padding: 1rem 0;
  }
}
</style>
