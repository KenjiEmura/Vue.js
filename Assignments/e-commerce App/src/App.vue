<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    TheHeader
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'userIsAuthenticated'
    })
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
