<script setup lang="ts"></script>

<template>
  <div class="section">
    <div class="structure">
      <h3 class="title green">Воздействие биопрепарата «Биоойл-АА» на окружающую среду</h3>
      <div class="item-list">
        <div class="item">
          <p>Биопрепарат не токсичен для человека и теплокровных животных</p>
          <p>
            Биопрепарат не образует токсичных соединений в воздушной среде и сточных водах, при производстве не
            используются токсичные вещества.
          </p>
          <p>
            Химического, радиационного, электромагнитного и термического воздействия биопрепарат на объекты окружающей
            среды не оказывает.
          </p>
        </div>
        <div class="item">
          <p>
            Биологическое воздействие биопрепарата «Биоойл-АА» на окружающую среду характеризуется тем, что
            бактериальные штаммы биопрепарата не вступают в антаго- нистические отношения с природной микрофлорой, а
            напротив, быстро адаптируясь к условиям среды, способствуют активации природного биоценоза, нарушенного
            загрязнениями. Нефтяные углеводороды под действием биопрепарата трансформируются в органическое вещество
            биомассы и углекислый газ, безвредные для экосистемы.
          </p>
        </div>
        <div class="item">
          <p>
            При использовании биопрепарата для очистки почв и водных систем от загрязнений нефти и нефтепродуктов не
            образуется вредных выбросов, жидких и твердых отходов.
          </p>
          <p>В воде биопрепарат не оказывает вредного воздействия на гидробионты и растительные сообщества.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.structure {
  height: unset;
  min-height: 100vh;
}

.title {
  width: 70%;
  margin-bottom: 5rem;
}

p {
  position: relative;
  padding: 1rem;
  text-align: justify;
}

p::before {
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
  // content: "\2022";
  content: '';
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0.2rem solid #2d6c9a;
  background-color: var(--color-green);
  font-weight: bold;
  font-size: 10rem;
  display: inline-block;
  // width: 3rem;
  z-index: -1;
}

.structure {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.item-list {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.item {
  padding: 0 2vw;
  flex: 1;
  font-weight: 100;
}

@media screen and (max-width: 600px) {
  .item-list {
    display: block;
  }

  p {
    font-size: 1.4rem;
  }
}</style>
