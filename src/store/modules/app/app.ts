import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from "vuex-module-decorators";
import store from "@/store";
import { Lang } from "@/model/local.model";
import { i18n } from "@/i18n";

// create a dynamic module 'a' on store.
@Module({
  name: "app",
  dynamic: true,
  namespaced: true,
  store,
})
export default class AppStore extends VuexModule {
  // state, must be public
  public lang: Lang = "en";

  @Mutation
  setLang(value: Lang): void {
    this.lang = value;
    i18n.locale = value;
  }
}

export const AppStoreModule = getModule(AppStore);
