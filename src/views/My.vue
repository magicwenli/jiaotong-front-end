<template>
  <div>
    <transition name="mybox" mode="out-in">
      <div v-show="showLogin" :class="{shake: shake}">
        <Login @show-signup="openSignup" />
      </div>
    </transition>
    <transition name="mybox" mode="out-in">
      <div v-show="showSignup" :class="{shake: shake}">
        <Signup />
      </div>
    </transition>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';

export default {
  components: { Login, Signup },
  data() {
    return {
      showLogin: true,
      showSignup: false,
      showSignupCheck: false,
      shake: false,
    };
  },
  methods: {
    unfold(){
      if (!this.showLogin && !this.showSignup) {
        this.showLogin=true;
      } else{
        this.showLogin= false;
        this.showSignup=false;
      }
    },
    openSignup(){
      console.log("showSignup");
      this.showLogin = !this.showLogin;
      this.showSignup=!this.showSignup;
    },
  },
}
</script>

<style scoped>
.mybox-enter-active,
.mybox-leave-active {
  /* transition: opacity 0.5s ease; */
  transition: all 0.4s;
}

.mybox-enter-from,
.mybox-leave-to {
  opacity: 0;
  transform: translateX(-281px);
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
