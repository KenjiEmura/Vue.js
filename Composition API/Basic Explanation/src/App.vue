<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <h2>{{ lastName }}</h2>
    <h3>{{ userAge }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" v-model="firstName" /> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
// import { reactive } from "vue";
// import { computed } from "vue";
// import { watch } from "vue";

export default {
  setup() {
    // const userName = ref('sdfasdfs Emura');
    // const age = ref(30);
    // setTimeout(() => {
    //   userName.value = 'Maria Antonieta de las flores';
    //   age.value = 250620;
    // }, 2000);
    //-----
    // const user = ref({ // reactive() and ref() are only different inside the setup(), on the template they are the same
    //   name: 'Kenji Emura',
    //   age: 30,
    // });
    // function setNewAge() {
    //   user.age = 32;
    // }
    //-----
    // const user = reactive({ // reactive() and ref() are only different inside the setup(), on the template they are the same
    //   name: "Kenji Emura",
    //   age: 30,
    // });
    // setTimeout(() => {
    //   user.name = "El Cambiazo";
    //   user.age = "Infinito";
    // }, 2000);
    //-----
    // const firstName = ref("");
    // const lastName = ref("");

    // const uName = computed(() => {
    //   return firstName.value + " " + lastName.value;
    // });

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }
    //-----
    // const firstName = ref("");
    // const lastName = ref("");
    // const userAge = ref(31);
    // const uName = computed(() => {
    //   return firstName.value + " " + lastName.value;
    // });
    // function setNewAge() {
    //   userAge.value = 35;
    // }
    // watch([userAge, uName], (newValues, oldValues) => {
    //   console.log("Old age: " + oldValues[0])
    //   console.log("New age: " + newValues[0])
    //   console.log("Old uName: " + oldValues[1])
    //   console.log("New uName: " + newValues[1])
    // });
    //-----
    const lastName = ref("");
    const userAge = ref(31);

    const lastNameInput = ref(null);

    function setLastName() {
      lastName.value = lastNameInput.value.value;
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
      // user,
      // setAge: setNewAge,
      //-----
      // setFirstName,
      // uName, // Computed property
      // setLastName,
      // firstName,
      // lastName,
      //-----
      // uName,
      // setAge: setNewAge,
      // userAge,
      // firstName,
      // lastName,
      //-----
      lastName,
      userAge,
      setLastName,
      lastNameInput
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
