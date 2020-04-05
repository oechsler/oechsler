<template>
  <div class="contact">
    <h2>Contact</h2>
    <p>
      <strong>{{ name }}</strong>
      <span>{{ street }} {{ number }}</span>
      <span>{{ zip }} {{ city }}</span>
    </p>
    <p>
      <span v-if="email !== undefined">
        Mail: <a :href="`mailto:${email}`">{{ email }}</a>
      </span>
      <span v-if="phone !== undefined">
        Phone: <a :href="`tel:${phone.replace(/\s/g, '')}`">‪{{ phone }}‬</a>
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  @Prop({ required: true }) readonly name!: string;
  @Prop({ required: true }) readonly street!: string;
  @Prop({ required: true }) readonly number!: number;
  @Prop({ required: true }) readonly zip!: string;
  @Prop({ required: true }) readonly city!: string;
  @Prop() readonly email?: string;
  @Prop() readonly phone?: string;
}
</script>

<style lang="scss" scoped>
.contact {
  @screen md {
    padding-top: 3.8rem;

    @apply float-right;
  }

  span,
  strong {
    @apply p-0;

    @apply block;
  }

  h2 {
    @screen md {
      @apply hidden;
    }
  }
}
</style>
