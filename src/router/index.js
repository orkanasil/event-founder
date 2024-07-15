import { createWebHistory, createRouter } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import AllEvents from "@/views/Events/AllEvents.vue";
import FavEvents from "@/views/Favorities/FavEvents.vue";
import AboutEvents from "@/views/About/AboutEvent.vue";

const routes = [
  {
    path: "",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        alias: "",
        name: "all-events",
        component: AllEvents,
      },
      {
        path: "/favEvents",
        name: "fav-events",
        component: FavEvents,
      },
      {
        path: "/aboutEvents",
        name: "about-events",
        component: AboutEvents,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
