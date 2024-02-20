<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  variant?: string;
}>();

const variantFilled = computed(() => props.variant === "filled");
</script>

<template>
  <button class="button" :class="{ 'button--filled': variantFilled }">
    <slot>Открыть</slot>
  </button>
</template>

<style lang="css" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid var(--color-primary);
  border-radius: var(--rounding);
  font-size: 16px;
  color: var(--color-text);
  z-index: 10;
}

.button--filled {
  font-weight: 600;
  color: #1a1a7c;
  background-color: var(--color-primary);
}
</style>
