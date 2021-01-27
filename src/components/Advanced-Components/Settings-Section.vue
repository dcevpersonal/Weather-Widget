<template>
  <div class="Settings-Section">
    <MenuSection text="Settings" type="Close" />
    <ListItemSection />
    <TextSection text="Add Location:" />
    <InputSection
      elementId="Setting-Section-Input-0"
      name="City Search"
      textHolder="City Name"
      :icon="true"
      type="Enter"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import MenuSection from "@/components/Advanced-Components/Menu-Section.vue";
import ListItemSection from "@/components/Advanced-Components/List-Item-Section.vue";
import InputSection from "@/components/Basic-Components/Input-Section.vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";

export default Vue.extend({
  name: "Settings-Section",
  components: {
    MenuSection,
    ListItemSection,
    InputSection,
    TextSection
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

#Text-Section {
  margin-top: 32px;
  font-size: 0.5rem;
}
#Input-Section {
  margin-top: 8px;
  margin-bottom: 32px;
}
</style>
