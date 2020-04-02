<template>
  <footer class="footer">
    <h1>
      <Brand />
    </h1>
    <p>
      Created with Vue.js and &hearts; in Pforzheim
    </p>
    <p>
      <a href="./imprint">Imprint</a>
      &nbsp;
      <span>− Copyright © 2020 Samuel Oechsler</span>
    </p>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Brand from "@/components/Brand.vue";

@Component({ components: { Brand } })
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  @apply px-10;
  @apply py-12;

  @apply bg-accent;

  @apply text-white;

  h1 > .brand {
    @apply text-2xl;
  }

  p {
    @apply font-light;
    @apply text-xs;

    &:last-child {
      @apply pt-4;
    }

    span,
    a {
      @apply opacity-50;
    }

    a {
      @apply transition-opacity;
      @apply duration-200;

      &:hover {
        @apply opacity-100;
      }
    }
  }
}
</style>
