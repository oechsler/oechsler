<template>
  <div class="devicon-list">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DeviconList extends Vue {}
</script>

<style lang="scss" scoped>
.devicon-list {
  @apply -mt-4;

  @apply flex;
  @apply flex-row;
  @apply flex-wrap;

  > .devicon {
    @apply text-4xl;

    @apply pt-4;
    @apply pr-4;
  }
}
</style>
