<template>
  <button v-if="userIsAuthenticated" @click="logout">Logout</button>
  <button v-else @click="login">Login</button>
  <p>{{ isTestAuth }}</p>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['userIsAuthenticated']),
    isTestAuth() {
      return this.$store.getters.testAuth
    }
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
}
</script>