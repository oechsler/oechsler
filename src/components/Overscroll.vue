<template>
  <div class="overscroll">
    <p class="overscroll-message" v-html="message"></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Overscroll extends Vue {
  @Prop({ required: true }) readonly message!: string;
}
</script>

<style lang="scss" scoped>
.overscroll {
  @apply fixed;
  @apply top-0;
  @apply left-1/2;
  @apply -ml-150;
  @apply p-12;
  @apply w-300;

  @apply -z-10;

  .overscroll-message {
    @apply font-bold;
    @apply text-center;
    @apply text-lg;
  }
}
</style>
