<script lang="ts" setup>
import { onBeforeUnmount } from "vue";
import { useStore } from "@/stores/store";
import TheLayout from "@/components/TheLayout.vue";

const store = useStore();

store.receiveScoreFromLocalStorage();
window.addEventListener("beforeunload", store.saveScoreToLocalStorage);

onBeforeUnmount(() => {
  window.addEventListener("beforeunload", store.saveScoreToLocalStorage);
});
</script>

<template>
  <TheLayout />
</template>
