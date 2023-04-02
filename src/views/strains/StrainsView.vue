<script setup lang="ts">
import image from "@/assets/images/main_background.jpg"
</script>

<template>
  <div class="section">
    <div class="background">
      <img class="bg-image" :src="image" />
    </div>
    <div class="structure">
      <div class="text">
        <h4>
          Штаммы бактерий, входящие в состав биопрепарата, относятся к микроорганизмам, непатогенным для человека.
        </h4>
        <h4>Это подтверждается Заключениями, выданными ведущими научными институтами:</h4>
        <ul>
          <li>
            <h4 class="list-item">ФБУН Государственный научный центр вирусологии и биотехнологии «Вектор»,</h4>
          </li>
          <li>
            <h4 class="list-item">
              ФГБНУ "Научно-исследовательский институт экспериментальной и клинической медицины"
            </h4>
          </li>
        </ul>
        <p>Штаммы бактерий, входящие в состав биопрепарата, не являются генетически модифицированными.</p>
        <p>
          По показателям вирулентности, безвредности, токсигенности и токсичности не патогенны для теплокровных
          животных.
        </p>
        <p>Биопрепарат удовлетворяет требованиям, предъявляемым к промышленным микроорганизмам.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  background-color: var(--color-green);
}
.background {
  position: absolute;
  top: 0;
  right: -150px;
  height: 100vh;
}
.bg-image {
  filter: saturate(300%);
  height: 100%;
}

ul {
  margin-left: 3rem;
  list-style: none;
  padding-bottom: 2rem;
}

ul li::before {
  content: "\2022";
  color: black;
  font-weight: bold;
  font-size: 2rem;
  display: inline-block;
  width: 3rem;
  margin-left: -3rem;
  //   margin-top: 2rem;
}

.list-item {
  display: inline;
}

p,
h4 {
  padding-bottom: 2rem;
}
.text {
  position: relative;
  z-index: 2;
  max-width: 60vw;
}

@media screen and (max-width: 1100px) {
  .background {
    right: -220px;
  }
}

@media screen and (max-width: 900px) {
  .background {
    right: -300px;
  }
}
@media screen and (max-width: 600px) {
  .text {
    max-width: unset;
  }
  .background {
    display: none;
  }
}
</style>
