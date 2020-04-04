<template>
  <section :id="anchor" :class="['page', { inverted }]" :style="rootStyles">
    <div :class="['page-container', { inverted }]">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Page extends Vue {
  @Prop() readonly anchor?: string;
  @Prop({ default: false }) readonly inverted!: boolean;
  @Prop() readonly background?: string;
  @Prop({ default: false }) readonly screen!: boolean;

  windowHeight = 0;
  footerHeight = 0;

  // Computed styles for the root element
  get rootStyles() {
    return {
      backgroundImage: this.background ? `url(${this.background})` : null,
      minHeight: this.screen
        ? `calc(${this.windowHeight}px - ${this.footerHeight}px)`
        : null,
    };
  }

  mounted() {
    if (screen) {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    }
  }

  onResize() {
    this.windowHeight = window.innerHeight;
    this.footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
  }
}
</script>

<style lang="scss">
.page {
  @apply bg-white;
  @apply bg-cover;
  @apply bg-center;

  .page-container {
    @apply min-h-180;

    @apply px-10;
    @apply py-16;

    @screen sm {
      @apply px-16;
    }

    @screen md {
      @apply px-32;
    }

    @screen lg {
      @apply py-24;
    }

    @screen xl {
      @apply mx-auto;
      @apply max-w-6xl;
    }
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

  a {
    @apply text-accent;

    @apply transition-colors;
    @apply duration-200;

    &:hover {
      @apply text-accent-lighter;
    }
  }

  &.screen {
    @apply h-screen;
  }

  &.inverted {
    @apply bg-gray-800;
    @apply text-white;
  }
}
</style>
