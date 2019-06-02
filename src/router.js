import Vue from "vue";
import Router from "vue-router";
import Championships from "./views/Championships.vue";
import BrasileiraoSerieA from "./views/BrasileiraoSerieA.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Championships",
      component: Championships
    },
    {
      path: "/championships/brasileirao-serie-A",
      name: "BrasileiraoSerieA",
      component: BrasileiraoSerieA
    }
  ]
});
