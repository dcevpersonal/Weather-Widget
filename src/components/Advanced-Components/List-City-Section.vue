<template>
  <div class="List-City-Section" id="List-City-Section">
    <draggable handle=".Menu" class="draggable" v-bind="dragOptions">
      <li v-for="data in WeatherData" :key="data.id">
        <ListCityItemSection :name="data.name" />
      </li>
    </draggable>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListCityItemSection from "@/components/Advanced-Components/List-City-Item-Section.vue";
import draggable from "vuedraggable";
import store from "@/store";

export default Vue.extend({
  name: "List-City-Section",
  data() {
    return {
      drag: false
    };
  },
  components: {
    ListCityItemSection,
    draggable
  },
  computed: {
    WeatherData() {
      return store.state.WeatherData;
    },
    dragOptions() {
      return {
        animation: 150,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
});
</script>

<style scoped lang="scss">
.List-City-Section {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
  }
}

.draggable {
  width: 100%;
}

.ghost {
  opacity: 0.5;
}
</style>
