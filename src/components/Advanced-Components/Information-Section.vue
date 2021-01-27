<template>
  <div class="Information-Section" id="Information-Section">
    <TextSection text="3.0m/s SSE" :icon="true" weight="Lighter" type="Wind" />
    <TextSection text="1021hPa" :icon="true" weight="Lighter" type="Pressure" />
    <TextSection text="Humidity: 97%" weight="Lighter" />
    <TextSection text="Dew point: 0C" weight="Lighter" />
    <TextSection text="Visibility: 10.0km" weight="Lighter" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";

export default Vue.extend({
  name: "Information-Section",
  components: {
    TextSection
  }
});
</script>

<style scoped lang="scss">
.Information-Section {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#Text-Section {
  font-family: "Roboto", monospace;
  font-size: 0.5rem;
  margin: 15px;
}
</style>
