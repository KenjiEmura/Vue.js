<template>
  <the-header>
    <h1>Hello world</h1>
  </the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

// import { mapGetters } from 'vuex';

export default {
  components: {
    TheHeader,
  },
  computed: {
    // ...mapGetters({
    //   isLoggedIn: 'userIsAuthenticated'
    // })
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

h1 {
  color: red;
  margin: 0;
}


html {
  font-family: sans-serif;
}

body {
  margin: 0;
  height: 100vh;
}
</style>