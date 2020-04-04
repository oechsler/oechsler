<template>
  <div class="imprint">
    <Page :screen="true">
      <router-link to="/"><span>&larr;</span>Return to homepage</router-link>
      <h1>Imprint</h1>
      <h2>According to §5 TMG</h2>
      <p>Samuel Oechsler</p>
      <p>Spicherstraße 22</p>
      <p>75173 Pforzheim</p>
      <h2>Contact</h2>
      <p>Phone: 0176 81751229</p>
      <p>E-Mail: you@oechsler.it</p>
    </Page>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Page from "@/components/Page.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Footer,
    Page,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.page {
  h1 {
    @apply pt-10;
  }

  h2 {
    @apply pt-4;
  }

  a > span {
    @apply pr-2;
  }
}
</style>
