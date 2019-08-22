import Vue from "vue";
import Router from "vue-router";
import StartPage from ".//components/StartPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: StartPage
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Search.vue")
    }
  ]
});
