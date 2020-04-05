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
.devicon {
  @apply text-base;
}
</style>
