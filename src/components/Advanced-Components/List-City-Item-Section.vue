<template>
  <div class="List-City-Item-Section">
    <TextSection :text="name" :icon="true" type="Menu" weight="300" />
    <IconSection type="Remove" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";
import IconSection from "@/components/Basic-Components/Icon-Section.vue";

export default Vue.extend({
  name: "List-City-Item-Section",
  props: {
    name: {
      default: "Default",
      type: String
    }
  },
  components: {
    TextSection,
    IconSection
  }
});
</script>

<style scoped lang="scss">
.List-City-Item-Section {
  display: flex;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  padding: 12px;
  align-items: center;
}

#Icon-Section {
  margin-left: auto;
}

#Text-Section {
  font-family: "Roboto Mono", monospace;
  font-size: 0.5rem;
}
</style>
