<template>
  <article class="project">
    <a :href="href ? href : null">
      <img :src="thumbnail" :alt="`${title} thumbnail`" />
      <div class="project-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <div class="project-tags">
          <slot></slot>
        </div>
      </div>
    </a>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Project extends Vue {
  @Prop({ required: true }) readonly thumbnail!: string;
  @Prop({ required: true }) readonly title!: string;
  @Prop({ required: true }) readonly description!: string;
  @Prop() readonly href?: string;
}
</script>

<style lang="scss" scoped>
.project {
  @apply w-11/12;

  @apply rounded-xl;
  @apply shadow-card;

  .project-content {
    @apply p-5;
  }

  .project-tags {
    @apply pt-4;

    @apply flex;
    @apply flex-row;

    .project-tag:not(:first-child) {
      @apply ml-2;
    }
  }

  h3 {
    @apply font-semibold;
    @apply text-lg;
  }

  p {
    @apply pt-1;

    @apply text-gray-700;
  }

  img {
    @apply w-full;

    @apply rounded-t-xl;
  }
}
</style>
