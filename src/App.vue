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
.inverted {
  @apply bg-gray-900;
}
</style>
