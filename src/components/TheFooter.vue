<script lang="ts" setup>
import { useStore } from "@/stores/store";

const store = useStore();
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <AppButton @click="store.handleResetGame"> Сбросить результат </AppButton>
      <AppButton @click="store.handleChangeView(store.views.ViewRules)">
        Правила
      </AppButton>
    </div>
  </footer>
</template>

<style lang="css">
.footer__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto;
}

@media (max-width: 576px) {
  .footer__container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
