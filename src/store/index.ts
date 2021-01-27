import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    section: "Home"
  },
  mutations: {
    setSection(state, data) {
      state.section = data;
    }
  },
  actions: {
    setSection(context, data) {
      context.commit("setSection", data);
    }
  },
  modules: {}
});
