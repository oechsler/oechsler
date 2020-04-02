<template>
  <article class="two-column">
    <div class="two-column-left">
      <slot name="left"></slot>
    </div>
    <div class="two-column-right">
      <slot name="right"></slot>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TwoColumn extends Vue {}
</script>

<style lang="scss" scope>
.two-column {
  & > * *:not(:first-child) {
    @apply pt-4;
  }

  .two-column-left {
  }

  .two-column-right {
    @apply pt-4;
  }
}
</style>
