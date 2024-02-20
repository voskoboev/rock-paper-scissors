<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/stores/store";

const props = defineProps<{
  variant: number;
  big?: boolean;
}>();

const store = useStore();

const variantRock = computed(() => props.variant === store.gameItems.rock);
const variantPaper = computed(() => props.variant === store.gameItems.paper);
const variantScissors = computed(
  () => props.variant === store.gameItems.scissors
);
</script>

<template>
  <div
    class="game-item game-item--rock"
    :class="{ 'game-item--big': big }"
    v-if="variantRock"
  >
    <img
      class="game-item__img"
      :class="{ 'game-item__img--big': big }"
      src="@/assets/icons/icon-rock.svg"
      alt="Жест камень"
    />
  </div>
  <div
    class="game-item game-item--paper"
    :class="{ 'game-item--big': big }"
    v-else-if="variantPaper"
  >
    <img
      class="game-item__img"
      :class="{ 'game-item__img--big': big }"
      src="@/assets/icons/icon-paper.svg"
      alt="Жест бумага"
    />
  </div>
  <div
    class="game-item game-item--scissors"
    :class="{ 'game-item--big': big }"
    v-else-if="variantScissors"
  >
    <img
      class="game-item__img"
      :class="{ 'game-item__img--big': big }"
      src="@/assets/icons/icon-scissors.svg"
      alt="Жест ножницы"
    />
  </div>
</template>

<style lang="css" scoped>
.game-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-width: 12px;
  border-style: solid;
  border-radius: 50%;
  background-color: var(--color-primary);
}

@media (max-width: 576px) {
  .game-item {
    width: 90px;
    height: 90px;
    border-width: 8px;
  }
}

.game-item--big {
  width: 150px;
  height: 150px;
  border-width: 14px;
}

@media (max-width: 576px) {
  .game-item--big {
    width: 120px;
    height: 120px;
    border-width: 10px;
  }
}

.game-item__img {
  width: 50px;
  height: 50px;
}

@media (max-width: 576px) {
  .game-item__img {
    width: 30px;
    height: 30px;
  }
}

.game-item__img--big {
  width: 60px;
  height: 60px;
}

@media (max-width: 576px) {
  .game-item__img--big {
    width: 40px;
    height: 40px;
  }
}

.game-item--rock {
  border-color: #ff0000;
}

.game-item--paper {
  border-color: #0000ff;
}

.game-item--scissors {
  border-color: #ffa500;
}
</style>
