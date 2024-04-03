<script lang="ts" setup>
import AppChoice from "@/components/AppChoice.vue";
import { useStore } from "@/stores/store";

const store = useStore();
</script>

<template>
  <section class="game">
    <div class="game__container">
      <button
        class="game__button game__button--rock"
        @click="
          store.handleResult(store.gameItems.rock, store.views.ViewResult)
        "
      >
        <AppChoice :variant="store.gameItems.rock" />
      </button>
      <button
        class="game__button game__button--paper"
        @click="
          store.handleResult(store.gameItems.paper, store.views.ViewResult)
        "
      >
        <AppChoice :variant="store.gameItems.paper" />
      </button>
      <button
        class="game__button game__button--scissors"
        @click="
          store.handleResult(store.gameItems.scissors, store.views.ViewResult)
        "
      >
        <AppChoice :variant="store.gameItems.scissors" />
      </button>
    </div>
  </section>
</template>

<style lang="css">
.game {
  display: flex;
  align-items: center;
  justify-content: center;
}

.game__container {
  position: relative;
  height: 420px;
  width: 420px;
  background-image: url("@/assets/icons/bg-triangle.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 320px 320px;
}

@media (max-width: 576px) {
  .game__container {
    width: 300px;
    height: 300px;
    background-size: 220px 220px;
  }
}

.game__button {
  position: absolute;
}

.game__button--rock {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.game__button--scissors {
  right: 0;
}
</style>
