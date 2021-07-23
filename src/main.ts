import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import { i18n } from "./i18n";
import "@/scss/1-common.scss";
import "ant-design-vue/dist/antd.css";
import "@/services/mock/mock";

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
