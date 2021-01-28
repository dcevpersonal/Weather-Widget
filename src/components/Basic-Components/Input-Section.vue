<template>
  <div class="Input-Section" id="Input-Section">
    <label :for="elementId">{{ name }}</label>
    <input
      type="text"
      :id="elementId"
      :name="elementId"
      :placeholder="textHolder"
      @keyup.enter="embedFunction"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :class="animation"
    />
    <IconSection :type="type" v-if="icon" :embedFunction="embedFunction" />
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
    },
    embedFunction: {
      type: Function,
      default: function() {
        console.log("Default");
      }
    },
    animation: {
      default: "",
      type: String
    },
    value: {
      default: "",
      type: String
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
    z-index: -2;
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

.shake {
  animation: Shake 0.25s ease-in-out;
  animation-delay: 0.1s;
}

#Icon-Section {
  margin-left: 12px;
}

@keyframes Shake {
  0% {
    margin-left: 0rem;
  }
  25% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    margin-left: 0rem;
  }
}
</style>
