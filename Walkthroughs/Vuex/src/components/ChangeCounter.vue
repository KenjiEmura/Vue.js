<template>
  <button @click="inc">Add 2</button>
  <button @click="changedName({ value: 15 })">Add 15</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    // ...mapActions(['increment', 'increase'])
    ...mapActions('numbers', {
      inc: 'increment',
      changedName: 'increase'
    })
  }
};
</script>
