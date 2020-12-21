<template>
  <div id="app" :class="{ inverted: darkmodeModule.isEnabled }">
    <DarkmodeWatcher />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'

import Darkmode from '@/store/darkmode'
import DarkmodeWatcher from '@/containers/DarkmodeWatcher.vue'

@Component({ components: { DarkmodeWatcher } })
export default class Default extends Vue {
  private darkmodeModule?: Darkmode

  public created() {
    this.darkmodeModule = getModule(Darkmode)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

html,
body {
  @apply m-0;

  @apply font-sans;
}

.inverted {
  @apply bg-gray-900;
}
</style>
