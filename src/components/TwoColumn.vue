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
  @screen md {
    @apply flex;
    @apply flex-row;
    @apply flex-grow;
  }

  & > * *:not(:first-child) {
    @apply pt-4;
  }

  .two-column-left {
    @screen md {
      @apply pr-6;
      @apply w-9/12;
    }

    @screen lg {
      @apply pr-0;
    }
  }

  .two-column-right {
    @apply pt-4;

    @screen md {
      @apply pt-0;
      @apply w-4/12;
    }

    @screen lg {
      @apply w-3/12;
    }

    p:nth-child(2) {
      @screen md {
        @apply pt-0;
      }
    }
  }
}
</style>
