import { createMemoryHistory, createRouter } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout.vue";

const routes = [
  {
    path: "",
    component: DefaultLayout,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
