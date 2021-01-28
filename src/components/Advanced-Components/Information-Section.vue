<template>
  <div class="Information-Section" id="Information-Section">
    <TextSection
      :text="`${wind}m/s ${compass}`"
      :icon="true"
      weight="300"
      type="Wind"
    />
    <TextSection
      :text="`${pressure}hPa`"
      :icon="true"
      weight="300"
      type="Pressure"
    />
    <TextSection :text="`Humidity: ${humidity}%`" weight="300" />
    <TextSection :text="`Dew point: ${Math.round(dewPoint)}°C`" weight="300" />
    <TextSection :text="`Visibility: ${visibility / 1000}km`" weight="300" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextSection from "@/components/Basic-Components/Text-Section.vue";

export default Vue.extend({
  name: "Information-Section",
  data() {
    return {
      compass: "N",
      dewPoint: "0"
    };
  },
  components: {
    TextSection
  },
  props: {
    wind: {
      default: "Default",
      type: String
    },
    feelsLike: {
      default: "Default",
      type: String
    },
    temp: {
      default: "Default",
      type: String
    },
    pressure: {
      default: "Default",
      type: String
    },
    humidity: {
      default: "Default",
      type: String
    },
    visibility: {
      default: "Default",
      type: String
    },
    deg: {
      default: "Default",
      type: String
    }
  },
  methods: {
    degCalculate() {
      if (parseInt(this.deg) >= 12 && parseInt(this.deg) <= 33) {
        this.compass = "NNE";
      } else if (parseInt(this.deg) >= 34 && parseInt(this.deg) <= 56) {
        this.compass = "NE";
      } else if (parseInt(this.deg) >= 57 && parseInt(this.deg) <= 78) {
        this.compass = "ENE";
      } else if (parseInt(this.deg) >= 79 && parseInt(this.deg) <= 101) {
        this.compass = "E";
      } else if (parseInt(this.deg) >= 102 && parseInt(this.deg) <= 123) {
        this.compass = "ESE";
      } else if (parseInt(this.deg) >= 124 && parseInt(this.deg) <= 146) {
        this.compass = "SE";
      } else if (parseInt(this.deg) >= 147 && parseInt(this.deg) <= 146) {
        this.compass = "SSE";
      } else if (parseInt(this.deg) >= 169 && parseInt(this.deg) <= 191) {
        this.compass = "S";
      } else if (parseInt(this.deg) >= 192 && parseInt(this.deg) <= 213) {
        this.compass = "SSW";
      } else if (parseInt(this.deg) >= 214 && parseInt(this.deg) <= 236) {
        this.compass = "SW";
      } else if (parseInt(this.deg) >= 237 && parseInt(this.deg) <= 258) {
        this.compass = "WSW";
      } else if (parseInt(this.deg) >= 259 && parseInt(this.deg) <= 281) {
        this.compass = "W";
      } else if (parseInt(this.deg) >= 282 && parseInt(this.deg) <= 303) {
        this.compass = "WNW";
      } else if (parseInt(this.deg) >= 304 && parseInt(this.deg) <= 326) {
        this.compass = "NW";
      } else if (parseInt(this.deg) >= 327 && parseInt(this.deg) <= 348) {
        this.compass = "NW";
      } else {
        this.compass = "N";
      }
    },
    dewPointCalculate() {
      this.dewPoint = (
        parseInt(this.temp) -
        (100 - parseInt(this.humidity + "%")) / 5
      ).toString();
    }
  },
  watch: {
    deg() {
      this.degCalculate();
    },
    temp() {
      this.dewPointCalculate();
    }
  },
  mounted() {
    this.degCalculate();
    this.dewPointCalculate();
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
  font-size: 0.5rem;
  margin: 15px;
}
</style>
