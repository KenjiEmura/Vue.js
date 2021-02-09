import { createStore } from 'vuex';

// Module imports
import cartModule from './modules/cart/index.js';
import productsModule from './modules/products/index.js';

const store = createStore({
  modules: {
    cart: cartModule,
    products: productsModule,
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;