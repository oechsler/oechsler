import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

const STATE_CHANGE = "STATE_CHANGE";

@Module({ name: "Darkmode", namespaced: true })
export default class Darkmode extends VuexModule {
  private enabled = false;

  @Mutation
  private [STATE_CHANGE](enabled: boolean) {
    this.enabled = enabled;
  }

  @Action({ commit: STATE_CHANGE })
  public enable() {
    return true;
  }

  @Action({ commit: STATE_CHANGE })
  public disable() {
    return false;
  }

  get isEnabled() {
    return this.enabled;
  }
}
