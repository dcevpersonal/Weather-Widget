import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    section: "Home",
    WeatherData: [
      {
        id: 1,
        name: "London",
        country: "GB",
        description: "Moderate rain",
        main: "Rain",
        wind: "2.06",
        feelsLike: "6.56",
        deg: "100",
        temp: "8.58",
        pressure: "1009",
        humidity: "97",
        visibility: "4300"
      },
      {
        id: 2,
        name: "Toronto",
        country: "GB",
        description: "Moderate rain",
        main: "Rain",
        wind: "2.06",
        feelsLike: "6.56",
        deg: "100",
        temp: "8.58",
        pressure: "1009",
        humidity: "97",
        visibility: "4300"
      }
    ]
  },
  mutations: {
    setSection(state, data) {
      state.section = data;
    },
    updateWeatherData(state, data) {
      state.WeatherData = data;
      console.log(state.WeatherData);
    }
  },
  actions: {
    setSection(context, data) {
      context.commit("setSection", data);
    },
    updateWeatherData(context, data) {
      context.commit("updateWeatherData", data);
    }
  },
  modules: {}
});
