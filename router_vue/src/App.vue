<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <header>
    <the-header></the-header>
  </header>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
