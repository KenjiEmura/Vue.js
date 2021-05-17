<template>
  <div>
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed } from "vue";
import { inject } from "vue";

export default {
  props: ["firstName", "lastName"],
  setup(props, context) {
    const uName = computed(() => {
      return props.firstName + " " + props.lastName;
    });

    // console.log(context);

    context.emit('save-data', 1) // this.$emit('save-data', 1)

    const age = inject('userAge')

    return {
      uName,
      age
    };
  },
};
</script>
