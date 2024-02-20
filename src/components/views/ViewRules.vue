<script lang="ts" setup>
import { useStore } from "@/stores/store";

const store = useStore();
</script>

<template>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__list">
      <li>Если игрок побеждает, он получает 1 очко</li>
      <li>Если компьютер выигрывает, игрок теряет 1 очко</li>
      <li>Бумага побеждает камень</li>
      <li>Камень побеждает ножницы</li>
      <li>Ножницы побеждают бумагу</li>
    </ul>
    <AppButton @click="store.handleChangeView(store.views.ViewGameField)">
      Назад к игре
    </AppButton>
  </section>
</template>

<style lang="css" scoped>
.rules,
.rules__list {
  display: flex;
  flex-direction: column;
}

.rules {
  gap: 30px;
}

.rules__list {
  gap: 10px;
  padding-right: 16px;
  padding-left: 16px;
}
</style>
