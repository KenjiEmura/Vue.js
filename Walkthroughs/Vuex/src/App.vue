<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <!-- <h3>{{ $store.state.counter }}</h3> -->
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Authentication:">
    <h4 v-if="userIsAuthenticated">You are Logged In!</h4>
    <h4 v-else>Please login!</h4>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // })
      // this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    }
  }
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
