import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import NowUiKit from "./plugins/now-ui-kit";
import Vuetify from "vuetify";

Vue.config.productionTip = false;

Vue.use(NowUiKit, Vuetify);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
