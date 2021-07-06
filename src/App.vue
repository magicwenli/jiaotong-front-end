<template>
<div class="block">
  <NavBar/>
  <Banner/>
  <Contents/>
</div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Banner from './components/Banner.vue'
import Contents from './components/Contents.vue'

import HelloWorld from './components/HelloWorld.vue'


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
