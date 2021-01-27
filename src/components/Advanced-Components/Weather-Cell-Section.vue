<template>
  <div class="Weather-Cell-Section">
    <MenuSection text="London, UK" type="Settings" />
    <ScreenSection />
    <TextSection
      text="Feels liks -3C. Broken clouds. Light breeze"
      weight="300"
    />
    <InformationSection />
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
