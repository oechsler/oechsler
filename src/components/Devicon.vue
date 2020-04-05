<template>
  <i :class="['devicon', `devicon-${icon}`]"></i>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Devicon extends Vue {
  @Prop() readonly icon!: string;
}
</script>

<style lang="scss" scoped>
@import url("https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css");

.devicon {
  @apply text-base;
}
</style>
