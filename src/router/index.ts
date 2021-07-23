import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Resume",
    component: () => import("../views/resume/Resume.vue"),
  },
  {
    path: "/QNA",
    name: "QNA",
    component: () => import("../views/QNA.vue"),
  },
  {
    path: "*",
    redirect: "/",
  }
];

const router = new VueRouter({
  routes,
});

export default router;
