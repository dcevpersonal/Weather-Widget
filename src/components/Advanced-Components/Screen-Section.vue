<template>
  <div class="Screen-Section">
    <IconSection type="Snow" />
    <TextSection text="7C" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";
import IconSection from "@/components/Basic-Components/Icon-Section.vue";

export default Vue.extend({
  name: "Screen-Section",
  components: {
    TextSection,
    IconSection
  }
});
</script>

<style scoped lang="scss">
.Screen-Section {
  display: flex;
  width: 100%;
  padding: 28px;
  align-items: center;
  justify-content: center;
}

#Text-Section {
  font-family: "Roboto Mono", monospace;
  font-size: 1.55rem;
  margin-left: 30px;
}
</style>
