<template>
  <div class="relative">
    <NavBar @open-login="openLogin" />
    <transition name="mybox">
      <!-- <div :class="{shake: shake}"> -->
        <Login v-show="showLogin" />
      <!-- </div> -->
    </transition>
    <Banner />
    <Contents />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import Contents from "./components/Contents.vue";
import Login from "./components/Login.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { NavBar, Banner, Contents, Login },
  data() {
    return {
      showLogin: false,
      shake: false,
    };
  },
  methods: {
    openLogin() {
      this.showLogin = !this.showLogin;
    },
  },
};

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

.mybox-leave-active,.mybox-enter-active {
    transition: all 1s ease;
}
.mybox-leave-active,.mybox-enter {
    height:0px !important ;
}
.mybox-leave,.mybox-enter-active {
    height: 281px ;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
