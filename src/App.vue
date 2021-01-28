<template>
  <div id="app">
    <WeatherListSection v-if="section === 'Home'" />
    <SettingsSection v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import WeatherListSection from "@/components/Advanced-Components/Weather-List-Section.vue";
import SettingsSection from "@/components/Advanced-Components/Settings-Section.vue";
import store from "./store";

export default Vue.extend({
  store,
  name: "App",
  components: {
    WeatherListSection,
    SettingsSection
  },
  methods: {
    FontLoader() {
      const googleFont = document.createElement("link");
      const fontLoader = document.createElement("link");
      googleFont.rel = "preconnect";
      googleFont.href = "https://fonts.gstatic.com";

      fontLoader.rel = "stylesheet";
      fontLoader.href =
        "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:wght@300;400&display=swap";

      document.head.appendChild(googleFont);
      document.head.appendChild(fontLoader);
    }
  },
  computed: {
    section() {
      return store.state.section;
    }
  },
  mounted() {
    //Vue Web Component Font Load Bug Fix
    this.FontLoader();
  }
});
</script>

<style lang="scss">
//Custom Font
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto:wght@300;400&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 20px; //Remove !!!
}

html,
body {
  --Black-1: #000000;
  --White-1: #ffffff;
  --Red-1: #ef5350;
  --Blue-1: #42a5f5;

  box-sizing: border-box;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
</style>
