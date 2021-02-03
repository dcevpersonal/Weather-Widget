<template>
  <div class="Weather-Cell-Section">
    <MenuSection
      :text="`${city},${country}`"
      type="Settings"
      :settings="settings"
    />
    <ScreenSection :main="main" :temp="temp" />
    <TextSection
      :text="`Feels like ${Math.round(feelsLike)}°C. ${description}.`"
      weight="300"
    />
    <InformationSection
      :deg="deg"
      :wind="wind"
      :feelsLike="feelsLike"
      :pressure="pressure"
      :temp="temp"
      :humidity="humidity"
      :visibility="visibility"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import MenuSection from "@/components/Advanced-Components/Menu-Section.vue";
import ScreenSection from "@/components/Advanced-Components/Screen-Section.vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";
import InformationSection from "@/components/Advanced-Components/Information-Section.vue";

export default Vue.extend({
  name: "Weather-Cell-Section",
  components: {
    MenuSection,
    ScreenSection,
    TextSection,
    InformationSection
  },
  props: {
    city: {
      default: "Default",
      type: String
    },
    country: {
      default: "Default",
      type: String
    },
    description: {
      default: "Default",
      type: String
    },
    main: {
      default: "Default",
      type: String
    },
    wind: {
      default: "Default",
      type: String
    },
    feelsLike: {
      default: "Default",
      type: String
    },
    temp: {
      default: "Default",
      type: String
    },
    pressure: {
      default: "Default",
      type: String
    },
    humidity: {
      default: "Default",
      type: String
    },
    visibility: {
      default: "Default",
      type: String
    },
    deg: {
      default: "Default",
      type: String
    },
    settings: {
      default: false,
      type: Boolean
    }
  }
});
</script>

<style scoped lang="scss">
.Weather-Cell-Section {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#Text-Section {
  font-size: 0.5rem;
  margin: 28px;
}
</style>
