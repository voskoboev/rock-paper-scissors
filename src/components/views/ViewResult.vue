<script lang="ts" setup>
import { computed } from "vue";
import AppChoice from "@/components/AppChoice.vue";
import { useStore } from "@/stores/store";

const store = useStore();

const winResult = computed(
  () => store.finalResultStatus === store.resultStatuses.win
);
const loseResult = computed(
  () => store.finalResultStatus === store.resultStatuses.lose
);
const drawResult = computed(
  () => store.finalResultStatus === store.resultStatuses.draw
);

const playerWinnerStyles = computed(
  () => store.finalResultStatus === store.resultStatuses.win
);  
const computerWinnerStyles = computed(
  () => store.finalResultStatus === store.resultStatuses.lose
);
</script>

<template>
  <section class="result">
    <div class="container result__container">
      <div class="result__unit">
        <p class="result__unit-text">Вы выбрали</p>
        <div :class="{ 'result__unit-wrapper--active': playerWinnerStyles }">
          <AppChoice big :variant="store.playerChoice" />
        </div>
      </div>
      <div class="result__unit">
        <p class="result__unit-output" v-if="winResult">Вы победили</p>
        <p class="result__unit-output" v-else-if="loseResult">Вы проиграли</p>
        <p class="result__unit-output" v-else-if="drawResult">Ничья</p>
        <AppButton
          variant="filled"
          @click="store.handleChangeView(store.views.ViewGameField)"
        >
          Начать снова
        </AppButton>
      </div>
      <div class="result__unit">
        <p class="result__unit-text">Компьютер выбрал</p>
        <div :class="{ 'result__unit-wrapper--active': computerWinnerStyles }">
          <AppChoice big :variant="store.computerChoice" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.result__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 420px;
}

@media (max-width: 576px) {
  .result__container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }
}

.result__unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.result__unit-text {
  text-transform: uppercase;
}

.result__unit-output {
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
}

.result__unit-wrapper--active {
  box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.03),
    0 0 0 60px rgba(255, 255, 255, 0.03), 0 0 0 90px rgba(255, 255, 255, 0.03);
  border-radius: 50%;
}
</style>
