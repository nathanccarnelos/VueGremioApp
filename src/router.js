import Vue from "vue";
import Router from "vue-router";
import Championships from "./views/Championships.vue";
import BrasileiraoSerieA from "./views/BrasileiraoSerieA.vue";
import Games from "./views/Games.vue";
import GameDetailedInfos from "./views/GameDetailedInfos.vue";
import Store from "./views/Store";

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
    },
    {
      path: "/Games",
      name: "Games",
      component: Games
    },
    {
      path: "/Games/DetailedInfos",
      name: "GameDetailedInfos",
      component: GameDetailedInfos
    },
    {
      path: "/Store",
      name: "Store",
      component: Store
    }
  ]
});
