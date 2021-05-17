<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Max", "Manu", "Juie", "Angela", "Michael"],
    };
  },
  methods: {
    removeUser(user) {
      console.log("\nUser = " + user, "\n\n");
      // this.users = this.users.filter((usr) => {
      //   console.log('Is '+user+ ' === ' + usr + ' ?')
      //   if (usr === user) {
      //     console.log('Yes')
      //     return false;
      //   } else {
      //     console.log('No')
      //     return true;
      //   }
      // });
      this.users = this.users.filter((usr) => usr !== user);
    },
    addUser() {
      const eneteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(eneteredUserName);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

input {
  margin: 0 1rem;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 0.8s ease;
}

</style>
