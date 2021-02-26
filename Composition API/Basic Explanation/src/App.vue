<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    // const userName = ref('Kenji Emura');
    // const age = ref(30);
    //-----
    // const user = ref({
    //   name: 'Kenji Emura',
    //   age: 30,
    // });
    //-----
    const user = reactive({
      name: 'Kenji Emura',
      age: 30,
    });

    console.log(user)

    // setTimeout(() => {
    //   // userName.value = 'Maria Antonieta de las flores';
    //   // age.value = 250620;
    //   user.name = 'El Cambiazo';
    //   user.age = 'Infinito';
    // }, 2000);

    function setNewAge() {
      user.age = 32
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
      setAge: setNewAge
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
