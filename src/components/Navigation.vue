<template>
  <nav class="navigation">
    <div class="navigation-container">
      <a href="/"><Brand /></a>
      <ul class="navigation-items">
        <slot></slot>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Brand from "@/components/Brand.vue";

@Component({ components: { Brand } })
export default class Naviagtion extends Vue {}
</script>

<style lang="scss" scoped>
.navigation {
  @apply hidden;

  @screen sm {
    @apply flex;
    @apply flex-row;
    @apply justify-center;
  }

  .navigation-container {
    @apply absolute;
    @apply pt-8;
    @apply px-24;
    @apply w-full;

    @apply flex;
    @apply flex-row;
    @apply justify-between;
    @apply items-baseline;

    @screen md {
      @apply px-32;
    }

    @screen lg {
      @apply px-40;
      @apply max-w-screen-lg;
    }

    @screen xl {
      @apply max-w-screen-xl;
    }

    .brand {
      @apply text-2xl;
      @apply text-white;
    }

    .navigation-items {
      @apply flex;
      @apply flex-row;
      @apply justify-end;

      @apply list-none;
    }
  }
}
</style>
