<template>
  <div class="Menu-Section">
    <TextSection text="London, UK" />
    <IconSection type="Settings" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";
import IconSection from "@/components/Basic-Components/Icon-Section.vue";

export default Vue.extend({
  name: "Menu-Section",
  components: {
    TextSection,
    IconSection
  }
});
</script>

<style scoped lang="scss">
.Menu-Section {
  display: flex;
  width: 100%;
  padding: 8px;
  align-items: center;
  justify-content: flex-start;
}

#Text-Section {
  font-size: 0.6rem;
  font-family: "Roboto Mono", monospace;
  margin-left: 8px;
}

#Icon-Section {
  margin-left: auto;
  margin-right: 8px;
}
</style>
