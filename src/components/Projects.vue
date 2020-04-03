<template>
  <div class="projects">
    <h1>Recent projects.</h1>
    <h2>
      Some of my <span>apps</span>, <span>scribbles</span> and
      <span>other</span> stuff that I've been part of
    </h2>
    <div class="projects-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Projects extends Vue {}
</script>

<style lang="scss" scoped>
.projects {
  .projects-container {
    @apply pt-10;

    @apply flex;
    @apply flex-row;
    @apply flex-wrap;
    @apply justify-center;

    @screen sm {
      @apply pb-10;
    }

    .project {
      @screen sm {
        transform: perspective(50rem) rotateY(10deg);
      }

      &:not(:first-child) {
        @apply mt-12;

        @screen sm {
          @apply mt-0;
          @apply -ml-4;
        }
      }
    }
  }

  h1 {
    @apply text-center;
  }

  h2 {
    @apply text-base;
    @apply text-center;

    span:nth-child(1) {
      @apply text-accent;
    }

    span:nth-child(2) {
      @apply text-accent-light;
    }

    span:nth-child(3) {
      @apply text-accent-lighter;
    }
  }
}
</style>
