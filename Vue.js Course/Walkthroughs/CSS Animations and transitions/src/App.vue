<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import UsersList from "./components/UsersList.vue";
export default {
  components: {
    // UsersList,
  },
  data() {
    return {
      animatedBlock: false,
      paragraphIsVisible: false,
      dialogIsVisible: false,
      usersAreVisible: false,
      enterIntervall: null,
      leaveIntervall: null,
    };
  },
  methods: {
    enterCancelled(el) {
      console.log("cancell-Enter");
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log("cancell-Leave");
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log("before-Enter");
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("Enter");
      console.log(el);
      let round = parseInt(parseFloat(el.style.opacity) / 0.01);
      console.log(
        "el.style.opacity / 0.01 = ",
        parseInt(parseFloat(el.style.opacity) / 0.01)
      );
      let limit = 100 - round;
      console.log("Enter starting round: " + round);
      console.log("Enter limit: " + limit);
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > limit) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("after-Enter");
      console.log(el);
    },
    beforeLeave(el) {
      console.log("before-Leave");
      console.log(el);
    },
    leave(el, done) {
      console.log("Leave");
      console.log(el);
      let round = 100 - parseInt(parseFloat(el.style.opacity) / 0.01);
      console.log(
        "el.style.opacity / 0.01 = ",
        parseInt(parseFloat(el.style.opacity) / 0.01)
      );
      let limit = 100 - round;
      console.log("Leave starting round: " + round);
      console.log("Leave limit: " + limit);
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > limit) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("after-Leave");
      console.log(el);
    },

    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translatex(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.route-enter-from {
}

.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}

.route-enter-to {
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}
</style>
