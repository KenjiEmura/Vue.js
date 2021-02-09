import { createStore } from 'vuex';

// Root store imports
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

// Module imports
import counterModule from './modules/counter/index.js';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;
