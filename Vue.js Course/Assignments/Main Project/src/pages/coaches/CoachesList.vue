<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoachesCall(true)"
            >Refresh</base-button
          >
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as Coach</base-button>
          <base-button v-if="!isCoach && !isLoading && isLoggedIn" link to="/register"
            >Register as Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches && !isLoading">
          <li v-for="coach in filteredCoaches" :key="coach.id">
            <coach-item v-bind="coach"></coach-item>
          </li>
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    ...mapGetters('coaches', {
      coaches: 'coaches',
      hasCoaches: 'hasCoaches',
      isCoach: 'isCoach'
    }),
    ...mapGetters({ // Auth is not namespaced, so it's treated like the global vuex
      isLoggedIn: 'isLoggedIn'
    }),
    filteredCoaches() {
      const coaches = this.coaches;
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    }
  },
  created() {
    this.loadCoachesCall();
  },
  methods: {
    ...mapActions('coaches', {
      loadCoaches: 'loadCoaches'
    }),
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoachesCall(refresh = false) {
      this.isLoading = true;
      try {
        await this.loadCoaches({ forceRefresh: refresh });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
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
