<template>
  <i :class="['devicon', `devicon-${icon}`]"></i>
</template>

<script lang="ts">
import "reflect-metadata";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Devicon extends Vue {
  @Prop() readonly icon!: string;
}
</script>

<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@v2.9.0/devicon.min.css");

.devicon {
  @apply text-base;
}
</style>
