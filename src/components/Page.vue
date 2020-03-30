<template>
  <article :class="['page', { inverted }, size]" :style="rootStyles">
    <div :class="['page-container', { inverted }]">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Page extends Vue {
  @Prop({ default: false }) readonly inverted!: boolean;
  @Prop() readonly background?: string;
  @Prop() readonly color?: string;
  @Prop() readonly minSize?: number;

  // Computed styles for the root element
  get rootStyles() {
    return {
      backgroundImage: this.background ? `url(${this.background})` : null,
      backgroundColor: this.color ?? null
    };
  }
}
</script>

<style scoped lang="scss">
.page {
  @apply font-lato;

  @apply bg-white;
  @apply bg-cover;
  @apply bg-center;

  .page-container {
    @apply min-h-180;

    @apply px-10;
    @apply py-16;
  }

  h1 {
    @apply text-3xl;
    @apply font-semibold;
  }

  h2 {
    @apply pt-4;

    @apply text-lg;
    @apply font-bold;
  }

  p {
    @apply pt-4;

    @apply text-sm;
    @apply text-justify;
  }

  &.inverted {
    @apply bg-gray-800;
    @apply text-white;
  }
}
</style>
