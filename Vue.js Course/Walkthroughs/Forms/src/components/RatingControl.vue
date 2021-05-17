<template>
  <ul>
    <li :class="{active: modelValue === 'poor'}" @click="activate('poor')"><button type="button">Poor</button></li>
    <li :class="{active: modelValue === 'average'}" @click="activate('average')"><button type="button">Average</button></li>
    <li :class="{active: modelValue === 'great'}" @click="activate('great')"><button type="button">Great</button></li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      activeOption: this.modelValue,
    };
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option)
    },
  },
};
</script>

<style scoped>

.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

button {
  outline: none;
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
