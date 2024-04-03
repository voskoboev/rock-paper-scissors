<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/stores/store";

const store = useStore();

const finalScore = computed(() => store.finalScore ?? 0);
</script>

<template>
  <div class="score">
    <h2 class="score__title">Счет</h2>
    <output class="score__output"> {{ finalScore }}</output>
  </div>
</template>

<style lang="css">
.score {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100px;
  padding: 14px;
  border-radius: var(--rounding);
  background-color: var(--color-primary);
}

.score__title {
  font-size: 20px;
  color: #1a1a7c;
}

.score__output {
  font-size: 30px;
  font-weight: 600;
  color: var(--color-dark);
}
</style>
