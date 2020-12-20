<template>
  <div class="darkmode-watcher"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import Darkmode from "../store/darkmode";

@Component
export default class DarkmodeWatcher extends Vue {
  private readonly DARK = "(prefers-color-scheme: dark)";
  private readonly LIGHT = "(prefers-color-scheme: light)";

  private darkmodeModule?: Darkmode;

  private onChangeListener = ({ matches, media }: MediaQueryListEvent) =>
    this.onChange(matches, media);

  public created() {
    this.darkmodeModule = getModule(Darkmode, this.$store);
  }

  public mounted() {
    if (!window.matchMedia) return;

    const lightQuery = window.matchMedia(this.DARK);
    const darkQuery = window.matchMedia(this.LIGHT);
    lightQuery.addListener(this.onChangeListener);
    darkQuery.addListener(this.onChangeListener);

    this.onChange(darkQuery.matches, darkQuery.media);
    this.onChange(lightQuery.matches, lightQuery.media);
  }

  public beforeDestroy() {
    if (!window.matchMedia) return;

    window.matchMedia(this.LIGHT).removeListener(this.onChangeListener);
    window.matchMedia(this.DARK).removeListener(this.onChangeListener);
  }

  private onChange(matches: boolean, media: string) {
    if (!matches) return;

    switch (media) {
      case this.DARK:
        this.darkmodeModule?.enable();
        break;
      case this.LIGHT:
        this.darkmodeModule?.disable();
        break;
    }
  }
}
</script>
