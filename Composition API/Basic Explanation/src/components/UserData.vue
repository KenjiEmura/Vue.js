<template>
  <h2>{{ uName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["firstName", "lastName", "age"],
  setup(props) {
    const uName = computed(() => {
      return props.firstName + " " + props.lastName;
    });
    return {
      uName,
    };
  },
};
</script>
