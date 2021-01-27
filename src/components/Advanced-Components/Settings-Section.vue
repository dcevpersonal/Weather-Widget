<template>
  <div class="Settings-Section">
    <MenuSection text="Settings" type="Close" />
    <ListItemSection />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import MenuSection from "@/components/Advanced-Components/Menu-Section.vue";
import ListItemSection from "@/components/Advanced-Components/List-Item-Section.vue";

export default Vue.extend({
  name: "Settings-Section",
  components: {
    MenuSection,
    ListItemSection
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
  font-size: 0.5rem;
  margin: 28px;
}
</style>
