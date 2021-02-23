import { createStore } from 'vuex';

// Module imports
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
