<template>
  <div class="hello">
    <h1>Hello World</h1>
    <h2>This is a sample Vue application</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
.hello {
  @apply p-16;
  @apply bg-accent;

  h1 {
    @apply text-white;
    @apply text-3xl;
  }

  h2 {
    @apply text-white;
  }
}
</style>
