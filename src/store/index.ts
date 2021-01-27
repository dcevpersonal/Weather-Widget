import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    section: "Home",
    WeatherData: {
      Citysad: {
        id: 1,
        name: "London"
      },
      Citybsv: {
        id: 2,
        name: "Toronto"
      }
    }
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
