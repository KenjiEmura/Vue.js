<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" v-bind="user"></user-item>
  </ul>
</template>

<script>
import UserItem from "../components/users/UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something

      // this.$router es para los links, .$route es para acceder a la query string
      this.$router.push("/teams");
      // this.$router.back();
      // this.$router.forward();
      // ....
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("UsersList Cmp beforeRouteEnter");
    // console.log("To: ", to, "\n\n", "From: ", from, "\n\n", next);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UsersList Cmp beforeRouteLeave");
    // console.log("To: ", to, "\n\n", "From: ", from, "\n\n", next);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm("Are you sure? You got unsaved changes!");
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
