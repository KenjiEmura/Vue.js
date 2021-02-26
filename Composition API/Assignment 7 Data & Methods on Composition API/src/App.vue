<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-show="refGoal.isVisible">{{ refGoal.myGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="refGoal.toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const myGoal = ref("Master Vue as fast as I can");
    const isVisible = ref(true);

    function toggleVisibility() {
      isVisible.value = !isVisible.value;
    }

    const reactiveGoal = reactive({
      myGoal: "Reactive Goal",
      isVisible: true,
      toggle() {
        this.isVisible = !this.isVisible;
      },
    });

    console.log(reactiveGoal.myGoal) // The difference between handling objects with reactive() and ref() is NOT on the template

    const refGoal = ref({
      myGoal: "Ref Goal",
      isVisible: true,
      toggle() {
        this.isVisible = !this.isVisible;
      },
    });

    console.log(refGoal.value.myGoal) // The difference between handling objects with reactive() and ref() is NOT on the template

    return {
      myGoal,
      toggleVisibility,
      isVisible,
      reactiveGoal,
      refGoal
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
