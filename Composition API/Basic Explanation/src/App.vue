<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <user-data :first-name="firstName" :last-name="lastName" :class="{'hello':true}"></user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import UserData from "./components/UserData.vue";
import { ref } from "vue";
// import { reactive } from "vue";
import { computed } from "vue";
// import { watch } from "vue";
import { provide } from "vue";
import { provide } from "vue";

export default {
  components: {
    UserData,
  },
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
    // const lastName = ref("");
    // const userAge = ref(31);

    // const lastNameInput = ref(null);

    // function setLastName() {
      //   lastName.value = lastNameInput.value.value;
    // }
    //-----
    const firstName = ref("");
    const lastName = ref("");
    const userAge = ref(31);

    function setNewAge() {
      userAge.value = 9999;
    }

    const uName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    provide('userAge', userAge)

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
      // lastName,
      // userAge,
      // setLastName,
      // lastNameInput,
      //-----
      firstName,
      lastName,
      uName,
      userAge,
      setNewAge
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
