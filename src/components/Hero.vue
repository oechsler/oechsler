<template>
  <header :class="['hero', { inverted }]">
    <div class="hero-background" :style="backgroundStyles"></div>
    <div class="hero-foreground">
      <div class="hero-navigation">
        <slot name="navigation"></slot>
      </div>
      <div class="hero-elevator">
        <slot name="elevator"></slot>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import "reflect-metadata";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Hero extends Vue {
  @Prop({ default: false }) readonly inverted!: boolean;
  @Prop() readonly background?: string;
  @Prop({ default: 0 }) readonly scroll?: number;
  @Prop() readonly scale?: number;
  @Prop({ default: 8 }) readonly blur!: number;
  @Prop({ default: 100 }) readonly grayscale!: number;
  @Prop({ default: 0.1 }) readonly opacity!: number;

  // Computed styles for the background element
  get backgroundStyles() {
    return {
      backgroundImage: `url(${this.background})`,
      backgroundPositionY: `-${this.scroll}px`,
      backgroundSize: this.scale ? `calc(100% * ${this.scale})` : null,
      filter: `blur(${this.blur}px) grayscale(${this.grayscale}%)`,
      opacity: this.opacity
    };
  }
}
</script>

<style lang="scss" scoped>
.hero {
  @apply relative;
  @apply w-screen;
  @apply h-screen;

  @apply bg-accent;

  @screen lg {
    @apply min-h-800;
  }

  .hero-background {
    @apply absolute;
    @apply w-full;
    @apply h-full;

    @apply bg-center;
    @apply bg-cover;

    @apply z-0;
  }

  .hero-foreground {
    @apply absolute;
    @apply w-full;
    @apply h-full;

    @appyl z-10;

    .hero-elevator {
      @apply h-full;

      @apply flex;
      @apply flex-col;
      @apply justify-center;
      @apply items-center;
    }
  }

  &.inverted {
    @apply bg-gray-900;
  }
}
</style>
