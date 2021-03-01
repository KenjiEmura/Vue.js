<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <h2>{{ uName }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { reactive } from "vue";
import { computed } from "vue";

export default {
  setup() {
    // const userName = ref('sdfasdfs Emura');
    // const age = ref(30);
    //-----
    // const user = ref({
    //   name: 'Kenji Emura',
    //   age: 30,
    // });
    //-----
    const user = reactive({
      name: "Kenji Emura",
      age: 30,
    });

    const firstName = ref("");
    const lastName = ref("");

    const uName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    // setTimeout(() => {
    //   // userName.value = 'Maria Antonieta de las flores';
    //   // age.value = 250620;
    //   user.name = 'El Cambiazo';
    //   user.age = 'Infinito';
    // }, 2000);

    function setNewAge() {
      user.age = 32;
    }

    return {
      // userName,
      // age,
      //-----
      // userName: user.value.name, // Don't use it like this with ref()
      // age: user.value.age  // Don't use it like this with ref()
      //-----
      // userName: user.name, // Don't use it like this with reactive()
      // age: user.age  // Don't use it like this with reactive()
      //-----
      user,
      setAge: setNewAge,
      setFirstName,
      setLastName,
      uName,
      firstName,
      lastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
