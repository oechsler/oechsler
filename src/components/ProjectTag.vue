<template>
  <div :class="['project-tag', languageClass]">
    <Devicon :icon="icon" />
    <span>{{ language }}</span>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Component, Prop } from "vue-property-decorator";
import Devicon from "./Devicon.vue";

@Component({ components: { Devicon } })
export default class ProjectTag extends Vue {
  @Prop({ required: true }) readonly language!: string;
  @Prop({ required: true }) readonly icon!: string;

  get languageClass() {
    return this.language.toLowerCase().replace("#", "-sharp");
  }
}
</script>

<style lang="scss" scoped>
.project-tag {
  @apply px-2;
  @apply py-1;

  @apply rounded-md;
  @apply bg-black;
  @apply flex;
  @apply flex-row;
  @apply items-center;

  @apply text-2xs;
  @apply text-white;

  @screen md {
    @apply text-3xs;
  }

  @screen lg {
    @apply text-2xs;
  }

  .devicon {
    @apply text-xs;

    @screen md {
      @apply text-2xs;
    }

    @screen lg {
      @apply text-xs;
    }
  }

  span {
    @apply pl-1;
  }

  &.go {
    @apply bg-blue-400;
  }

  &.shell {
    @apply bg-orange-400;
  }

  &.c-sharp {
    @apply bg-purple-700;
  }

  &.vue {
    @apply bg-green-500;
  }
}
</style>
