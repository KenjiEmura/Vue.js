<template>
  <the-header>
    Hello world
  </the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

// import { mapGetters } from 'vuex';

export default {
  components: {
    TheHeader,
  },
  computed: {
    // ...mapGetters('products', {
    //   products: 'allProducts',
    // })
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>