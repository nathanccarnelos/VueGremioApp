import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    logged: false
  },
  mutations: {
    changeIsLogged(state, payload) {
      state.logged = payload;
    }
  },
  actions: {
    tryToLogin(context, payload) {
      if (payload.username === "teste" && payload.password === "123")
        context.commit("changeIsLogged", true);
    }
  }
});

export default store;
