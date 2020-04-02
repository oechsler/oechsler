<template>
  <section :id="anchor" :class="['page', { inverted }]" :style="rootStyles">
    <div :class="['page-container', { inverted }]">
      <slot />
    </div>
    <slot name="footer" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Page extends Vue {
  @Prop() readonly anchor?: string;
  @Prop({ default: false }) readonly inverted!: boolean;
  @Prop() readonly background?: string;

  // Computed styles for the root element
  get rootStyles() {
    console.log(this.background);
    return {
      backgroundImage: this.background ? `url(${this.background})` : null
    };
  }
}
</script>

<style lang="scss">
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
    @apply text-lg;
    @apply font-bold;
  }

  p {
    @apply text-sm;
  }

  &.inverted {
    @apply bg-gray-800;
    @apply text-white;
  }
}
</style>
