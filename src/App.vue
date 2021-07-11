<template>
  <div class="relative">
    <NavBar />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SignupCheck from "./components/SignupCheck.vue";
import Footer from "./components/Footer.vue";


// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { NavBar, SignupCheck,Footer },
}

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
