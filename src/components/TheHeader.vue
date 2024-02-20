<script lang="ts" setup>
import TheScore from "@/components/TheScore.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <img
          class="header__logo-img"
          src="@/assets/icons/logo.svg"
          alt="Логотип игры Камень Ножницы Бумага"
        />
        <TheScore />
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
.header {
  padding-top: 10px;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border: 1px solid var(--color-primary);
  border-radius: var(--rounding);
}

.header__logo-img {
  display: block;
  width: 160px;
  height: 100px;
}

@media (max-width: 576px) {
  .header__logo-img {
    height: 80px;
    width: 130px;
  }
}
</style>
