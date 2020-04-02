<template>
  <div class="about">
    <h1>About me.</h1>
    <p class="about-content">
      <slot name="about"></slot>
    </p>
    <h2>Technologies</h2>
    <DeviconList>
      <slot name="technologies"></slot>
    </DeviconList>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DeviconList from "@/components/DeviconList.vue";

@Component({
  components: {
    DeviconList
  }
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about {
  .about-content {
    @apply text-justify;
  }
}
</style>
