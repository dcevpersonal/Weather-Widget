<template>
  <div class="Screen-Section">
    <IconSection :type="main" />
    <TextSection :text="`${Math.round(temp)}°C`" v-if="!WeatherDataError" />
    <TextSection text="Error" v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";
import IconSection from "@/components/Basic-Components/Icon-Section.vue";
import store from "@/store";

export default Vue.extend({
  name: "Screen-Section",
  props: {
    temp: {
      default: "Default",
      type: String
    },
    main: {
      default: "Default",
      type: String
    }
  },
  components: {
    TextSection,
    IconSection
  },
  computed: {
    WeatherDataError() {
      return store.state.WeatherDataError;
    }
  }
});
</script>

<style scoped lang="scss">
.Screen-Section {
  display: flex;
  width: 100%;
  padding: 24px;
  align-items: center;
  justify-content: center;
}

#Text-Section {
  font-family: "Roboto Mono", monospace;
  font-size: 1.3rem;
  margin-left: 30px;
}
</style>
