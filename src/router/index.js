import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AperosView from "../views/AperosView.vue";
import PlatsView from "../views/PlatsView.vue";
import CocktailsView from "../views/CocktailsView.vue";
import EntreesView from "../views/EntreesView.vue";
import DessertsView from "../views/DessertsView.vue";
import RecetteView from "../views/RecetteView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/aperos",
      name: "aperos",
      component: AperosView,
    },
    {
      path: "/entrees",
      name: "entrees",
      component: EntreesView,
    },
    {
      path: "/plats",
      name: "plats",
      component: PlatsView,
    },
    {
      path: "/cocktails",
      name: "cocktails",
      component: CocktailsView,
    },
    {
      path: "/desserts",
      name: "desserts",
      component: DessertsView,
    },
    {
      path: "/recettes/:type/:name",
      name: "recettes",
      component: RecetteView,
    },
    {
      path: "/:catchall(.*)*",
      name: "notfound",
      component: NotFoundView,
    },
  ],
});

export default router;
