<template>
  <div :class="['overscroll', { invisible: scrollTop > 0 }]">
    <p class="overscroll-message" v-html="message"></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Overscroll extends Vue {
  @Prop({ required: true }) readonly message!: string;

  private scrollTop = 0;

  public mounted() {
    window.addEventListener("scroll", this.onScroll, { passive: true });
  }

  public beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }

  private onScroll() {
    const element = document.documentElement;
    this.scrollTop =
      (window.pageYOffset || element.scrollTop) - (element.clientTop || 0);
  }
}
</script>

<style lang="scss" scoped>
.overscroll {
  @apply fixed;
  @apply top-0;
  @apply left-1/2;
  @apply -ml-150;
  @apply pt-12;
  @apply w-300;

  @apply -z-10;

  &.invisible {
    @apply hidden;
  }

  .overscroll-message {
    @apply font-bold;
    @apply text-center;
    @apply text-lg;
  }
}
</style>
