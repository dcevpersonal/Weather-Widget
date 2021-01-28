<template>
  <div class="Settings-Section">
    <MenuSection text="Settings" type="Close" />
    <ListCitySection />
    <TextSection text="Add Location:" />
    <TextSection
      text="City Not Found"
      class="Text-Section-Error"
      style="margin: 8px;font-family: 'Roboto Mono', monospace; font-size: 0.5rem; color: #ef5350"
      v-if="WeatherDataError"
      weight="300"
    />
    <TextSection
      text="City Already Exists"
      class="Text-Section-Error"
      style="margin: 8px;font-family: 'Roboto Mono', monospace; font-size: 0.5rem; color: #ef5350"
      v-if="DuplicateCityError"
      weight="300"
    />
    <InputSection
      elementId="Setting-Section-Input-0"
      name="City Search"
      textHolder="City Name"
      :icon="true"
      type="Enter"
      :embedFunction="addWeatherData"
      v-model="city"
      :animation="WeatherDataError ? 'shake' : ''"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import MenuSection from "@/components/Advanced-Components/Menu-Section.vue";
import InputSection from "@/components/Basic-Components/Input-Section.vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";
import ListCitySection from "@/components/Advanced-Components/List-City-Section.vue";
import store from "@/store";

export default Vue.extend({
  name: "Settings-Section",
  components: {
    MenuSection,
    ListCitySection,
    InputSection,
    TextSection
  },
  data() {
    return {
      city: ""
    };
  },
  methods: {
    addWeatherData() {
      store.commit("addWeatherData", this.city);
    }
  },
  computed: {
    WeatherDataError() {
      return store.state.WeatherDataError;
    },
    DuplicateCityError() {
      return store.state.DuplicateCityError;
    }
  }
});
</script>

<style scoped lang="scss">
.Settings-Section {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.draggable {
  width: 100%;
}

#Text-Section {
  margin-top: 32px;
  font-size: 0.5rem;
}

#Input-Section {
  margin-top: 8px;
  margin-bottom: 32px;
}
</style>
