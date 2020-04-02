<template>
  <span class="brand"><strong>Oechsler</strong>.it</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Brand extends Vue {}
</script>

<style lang="scss" scoped>
.brand {
  @apply font-lato;
  @apply text-xl;
}
</style>
