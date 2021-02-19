<template>
  <section>
    Filter
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          <coach-item v-bind="coach"></coach-item>
        </li>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

import { mapGetters } from 'vuex';
// import { mapActions } from 'vuex';

export default {
  components: {
    CoachItem
  },
  computed: {
    ...mapGetters('coaches', {
      filteredCoaches: 'coaches',
      hasCoaches: 'hasCoaches'
    })
  },
  methods: {
    // ...mapActions('coaches', {
    //   xxxxxxxxx: 'xxxxxxx'
    // })
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
