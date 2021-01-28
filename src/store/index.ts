import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    section: "Home",
    WeatherData: [
      {
        id: "6167865",
        name: "Toronto",
        country: "CA",
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
    ],
    WeatherDataError: false
  },
  mutations: {
    setWeatherData(state) {
      if (localStorage.getItem("weatherdata") !== null) {
        state.WeatherData = JSON.parse(
          localStorage.getItem("weatherdata") || ""
        );
      }
    },
    getUserLocation(state) {
      state.WeatherDataError = false;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          axios
            .get(
              "https://api.openweathermap.org/data/2.5/weather?lat=" +
                position.coords.latitude +
                "&lon=" +
                position.coords.longitude +
                "&appid=637ee0f88b3e40a2991fc34a234f8341&units=metric"
            )
            .then(response => {
              const data = {
                id: response.data.id.toString(),
                name: response.data.name,
                country: response.data.sys.country,
                description: response.data.weather[0].description,
                main: response.data.weather[0].main,
                wind: response.data.wind.speed.toString(),
                feelsLike: response.data.main.feels_like.toString(),
                deg: response.data.wind.deg.toString(),
                temp: response.data.main.temp.toString(),
                pressure: response.data.main.pressure.toString(),
                humidity: response.data.main.humidity.toString(),
                visibility: response.data.visibility.toString()
              };
              state.WeatherData = [];
              state.WeatherData.push(data);
              localStorage.setItem(
                "weatherdata",
                JSON.stringify(state.WeatherData)
              );
              state.WeatherDataError = false;
            })
            .catch(() => {
              state.WeatherDataError = true;
            });
        });
      }
    },
    setSection(state, data) {
      state.section = data;
    },
    updateWeatherData(state, data) {
      state.WeatherData = data;
      localStorage.setItem("weatherdata", JSON.stringify(state.WeatherData));
    },
    removeWeatherData(state, data) {
      state.WeatherData = state.WeatherData.filter(elemenet => {
        return elemenet.id !== data;
      });

      localStorage.setItem("weatherdata", JSON.stringify(state.WeatherData));
    },
    addWeatherData(state, data) {
      state.WeatherDataError = false;
      Vue.axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            data +
            "&appid=637ee0f88b3e40a2991fc34a234f8341&units=metric"
        )
        .then(response => {
          const data = {
            id: response.data.id.toString(),
            name: response.data.name,
            country: response.data.sys.country,
            description: response.data.weather[0].description,
            main: response.data.weather[0].main,
            wind: response.data.wind.speed.toString(),
            feelsLike: response.data.main.feels_like.toString(),
            deg: response.data.wind.deg.toString(),
            temp: response.data.main.temp.toString(),
            pressure: response.data.main.pressure.toString(),
            humidity: response.data.main.humidity.toString(),
            visibility: response.data.visibility.toString()
          };
          state.WeatherData.push(data);
          localStorage.setItem(
            "weatherdata",
            JSON.stringify(state.WeatherData)
          );
          state.WeatherDataError = false;
        })
        .catch(() => {
          state.WeatherDataError = true;
        });
    },
    getNewWeatherData(state) {
      const ids = [];
      for (const city of state.WeatherData) {
        ids.push(city.id);
      }
      state.WeatherDataError = false;
      Vue.axios
        .get(
          "https://api.openweathermap.org/data/2.5/group?id=" +
            ids +
            "&appid=637ee0f88b3e40a2991fc34a234f8341&units=metric"
        )
        .then(response => {
          for (const city of response.data.list) {
            state.WeatherData = state.WeatherData.filter(element => {
              return element.id !== city.id.toString();
            });
            const data = {
              id: city.id.toString(),
              name: city.name,
              country: city.sys.country,
              description: city.weather[0].description,
              main: city.weather[0].main,
              wind: city.wind.speed.toString(),
              feelsLike: city.main.feels_like.toString(),
              deg: city.wind.deg.toString(),
              temp: city.main.temp.toString(),
              pressure: city.main.pressure.toString(),
              humidity: city.main.humidity.toString(),
              visibility: city.visibility.toString()
            };
            state.WeatherData.push(data);
          }
          localStorage.setItem(
            "weatherdata",
            JSON.stringify(state.WeatherData)
          );
          state.WeatherDataError = false;
        })
        .catch(() => {
          state.WeatherDataError = true;
        });
    }
  },
  actions: {
    setWeatherData(context) {
      context.commit("setWeatherData");
    },
    setSection(context, data) {
      context.commit("setSection", data);
    },
    updateWeatherData(context, data) {
      context.commit("updateWeatherData", data);
    },
    removeWeatherData(context, data) {
      context.commit("removeWeatherData", data);
    },
    addWeatherData(context, data) {
      context.commit("addWeatherData", data);
    },
    getNewWeatherData(context) {
      context.commit("getNewWeatherData");
    },
    getUserLocation(context) {
      context.commit("getUserLocation");
    }
  },
  modules: {}
});
