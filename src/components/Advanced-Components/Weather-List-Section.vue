<template>
  <div class="List-Weather-Section" id="List-Weather-Section">
    <li v-for="data in WeatherData" :key="data.id">
      <WeatherCellSection
        :city="data.name"
        :country="data.country"
        :description="data.description"
        :main="data.main"
        :wind="data.wind"
        :feelsLike="data.feelsLike"
        :pressure="data.pressure"
        :temp="data.temp"
        :humidity="data.humidity"
        :visibility="data.visibility"
        :deg="data.deg"
        :settings="true ? data.id === WeatherData[0].id : false"
      />
    </li>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WeatherCellSection from "@/components/Advanced-Components/Weather-Cell-Section.vue";
import store from "@/store";

export default Vue.extend({
  name: "List-Weather-Section",
  components: {
    WeatherCellSection
  },
  data() {
    return {
      timer: 0
    };
  },
  computed: {
    WeatherData() {
      return store.state.WeatherData;
    }
  },
  mounted() {
    if (localStorage.getItem("weatherdata") !== null) {
      store.commit("setWeatherData");
    } else {
      store.commit("getUserLocation");
    }

    store.commit("getNewWeatherData");
    this.timer = setInterval(() => {
      store.commit("getNewWeatherData");
    }, 1000 * 60 * 30);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    console.log("Destroy");
  }
});
</script>

<style scoped lang="scss">
.List-Weather-Section {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
  }
}
</style>
