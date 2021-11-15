import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/index.vue";
import Salsas from "./pages/salsas.vue";
import Soups from "./pages/soups.vue";
import Traditional from "./pages/traditional.vue";
import Abroad from "./pages/abroad.vue";
import Friends from "./pages/friends.vue";
import NotFound from "./pages/404.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/salsas",
    name: "Salsas",
    component: Salsas,
  },
  {
    path: "/soups",
    name: "Soups",
    component: Soups,
  },
  {
    path: "/traditional",
    name: "Traditional",
    component: Traditional,
  },
{
  path: "/abroad",
  name: "Abroad",
  component: Abroad,
},
{
  path: "/friends",
  name: "Friends",
  component: Friends,
},
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
