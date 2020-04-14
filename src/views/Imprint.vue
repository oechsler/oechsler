<template>
  <div class="imprint">
    <Page :screen="true" :inverted="darkmodeModule.isEnabled">
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
    <Footer :inverted="darkmodeModule.isEnabled" />
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
import Page from "@/components/Page.vue";
import Footer from "@/components/Footer.vue";
import Darkmode from "../store/darkmode";
import { getModule } from "vuex-module-decorators";

@Component({
  components: {
    Footer,
    Page
  }
})
export default class Home extends Vue {
  private darkmodeModule?: Darkmode;

  public created() {
    this.darkmodeModule = getModule(Darkmode, this.$store);
  }
}
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
