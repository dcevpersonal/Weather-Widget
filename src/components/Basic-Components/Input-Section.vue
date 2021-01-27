<template>
  <div class="Input-Section" id="Input-Section">
    <label :for="elementId">{{ name }}</label>
    <input
      type="text"
      :id="elementId"
      :name="elementId"
      :placeholder="textHolder"
    />
    <IconSection :type="type" v-if="icon" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconSection from "@/components/Basic-Components/Icon-Section.vue";

export default Vue.extend({
  name: "Input-Section",
  components: {
    IconSection
  },
  props: {
    elementId: {
      default: "Input",
      type: String
    },
    textHolder: {
      default: "Default",
      type: String
    },
    name: {
      default: "Name",
      type: String
    },
    type: {
      default: "Wind",
      type: String
    },
    icon: {
      default: false,
      type: Boolean
    }
  }
});
</script>

<style scoped lang="scss">
.Input-Section {
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  label {
    position: absolute;
    z-index: -1;
  }
  input {
    height: 35px;
    border: none;
    outline: none;
    border: 2px solid black;
    border-radius: 5px;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    padding: 8px;
    transition: border 0.1s ease-out;
    &:focus {
      border: 2px solid #42a5f5;
    }
  }
}

#Icon-Section {
  margin-left: 12px;
}
</style>
