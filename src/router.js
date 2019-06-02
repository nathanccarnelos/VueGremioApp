import Vue from "vue";
import Router from "vue-router";
import Championships from "./views/Championships.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Championships",
      component: Championships
    }
  ]
});
