<script setup lang="ts">
import Aside from "./views/Aside.vue";
import Navi from "./views/Navi.vue";
</script>

<template>
  <div class="grid-container">
    <header><Navi /></header>

    <aside><Aside /></aside>

    <main>
      <router-view />
    </main>

    <footer>footer</footer>
  </div>
</template>
