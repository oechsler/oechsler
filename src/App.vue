<template>
  <div id="app" :class="{ inverted: darkmodeModule.isEnabled }">
    <DarkmodeWatcher />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import DarkmodeWatcher from "./containers/DarkmodeWatcher.vue";
import Darkmode from "./store/darkmode";

@Component({ components: { DarkmodeWatcher } })
export default class App extends Vue {
  private darkmodeModule?: Darkmode;

  public created() {
    this.darkmodeModule = getModule(Darkmode, this.$store);
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap");
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");

html,
body {
  @apply m-0;

  @apply font-sans;
}

.inverted {
  @apply bg-gray-900;
}
</style>
