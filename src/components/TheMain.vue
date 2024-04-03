<script lang="ts" setup>
import { useStore } from "@/stores/store";

const store = useStore();
</script>

<template>
  <main class="main">
    <div class="container main__container">
      <KeepAlive>
        <component :is="store.activeView" />
      </KeepAlive>
    </div>
  </main>
</template>

<style lang="css">
.main {
  flex-grow: 1;
  height: 100%;
}

.main__container {
  padding-top: 30px;
  padding-bottom: 30px;
  height: 100%;
}

@media (max-width: 576px) {
  .main__container {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
