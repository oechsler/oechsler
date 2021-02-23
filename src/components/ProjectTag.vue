<template>
  <div :class="['project-tag', languageClass]">
    <Devicon v-if="icon !== undefined" :icon="icon" />
    <span :class="[icon === undefined ? 'no-icon' : '']">{{ language }}</span>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Component, Prop } from "vue-property-decorator";
import Devicon from "./Devicon.vue";

@Component({ components: { Devicon } })
export default class ProjectTag extends Vue {
  @Prop({ required: true }) readonly language!: string;
  @Prop() readonly icon?: string;

  get languageClass() {
    return this.language
      .toLowerCase()
      .replace("#", "-sharp")
      .replace("++", "-plusplus");
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

    &.no-icon {
      @apply pl-0;
    }
  }

  &.go {
    @apply bg-blue-400;
  }

  &.shell {
    @apply bg-orange-400;
  }

  &.kotlin {
    @apply bg-orange-600;
  }

  &.c-plusplus {
    @apply bg-pink-600;
  }

  &.c-sharp {
    @apply bg-purple-700;
  }

  &.vue {
    @apply bg-green-500;
  }

  &.wip {
    @apply text-black;
    @apply bg-yellow-500;
  }
}
</style>
