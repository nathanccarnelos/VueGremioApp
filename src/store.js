import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    logged: false,
    nextGameToBuy: null
  },
  mutations: {
    changeIsLogged(state, payload) {
      state.logged = payload;
    },
    changeClickedGame(state, payload) {
      state.nextGameToBuy = payload;
    }
  },
  actions: {
    logout(context) {
      context.commit("changeIsLogged", false);
    },
    tryToLogin(context, payload) {
      if (payload.username === "teste" && payload.password === "123") {
        context.commit("changeIsLogged", true);
      }
    },
    changeClickedGame(context, payload) {
      context.commit("changeClickedGame", payload);
    }
  }
});

export default store;
