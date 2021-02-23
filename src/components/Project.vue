<template>
  <article class="project">
    <a :href="href ? href : null" target="_blank" rel="noopener noreferrer">
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
import "reflect-metadata";
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
  @apply bg-white;
  @apply shadow-card;

  @screen sm {
    @apply w-7/12;
  }

  @screen md {
    @apply w-4/12;
  }

  @screen xl {
    @apply w-auto;

    max-width: 15.5rem;
  }

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
    @apply text-black;

    @screen md {
      @apply text-base;
    }

    @screen lg {
      @apply text-lg;
    }
  }

  p {
    @apply pt-1;

    @apply text-gray-700;

    @screen md {
      @apply text-2xs;
    }

    @screen lg {
      @apply text-sm;
    }

    @screen xl {
      @apply text-xs;
    }
  }

  a[href=""] {
    @apply cursor-default;
  }

  img {
    @apply w-full;

    @apply rounded-t-xl;
  }
}

.inverted .project {
  @apply bg-gray-900;

  h3 {
    @apply text-white;
  }

  p {
    @apply text-gray-500;
  }

  img {
    opacity: 0.4;
    filter: saturate(200%) invert(100%) brightness(130%);
  }
}
</style>
