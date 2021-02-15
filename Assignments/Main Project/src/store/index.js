import { createStore } from 'vuex';

// Module imports
import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    // products: productsModule,
  },
  state() {},
  mutations() {},
  actions() {},
  getters() {}
});

export default store;
