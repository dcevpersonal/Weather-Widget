<template>
  <div class="Text-Section" id="Text-Section">
    <IconSection :type="type" v-if="icon" />
    <h1 :title="text" id="test" :style="'font-weight:' + weight">{{ text }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconSection from "@/components/Basic-Components/Icon-Section.vue";

export default Vue.extend({
  name: "Text-Section",
  components: {
    IconSection
  },
  props: {
    text: {
      default: "Default",
      type: String
    },
    type: {
      default: "Wind",
      type: String
    },
    icon: {
      default: false,
      type: Boolean
    },
    weight: {
      default: "Bold",
      type: String
    }
  }
});
</script>

<style scoped lang="scss">
.Text-Section {
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
}

#Icon-Section {
  margin-right: 12px;
}
</style>
