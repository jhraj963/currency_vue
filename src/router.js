// import { createWebHistory, createRouter } from "vue-router";
import {createWebHistory, createRouter} from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home"),
  },
  {
    path: "/ExpenseList",
    alias: "/ExpenseList",
    name: "ExpenseList",
    component: () => import("./components/ExpenseList"),
  },
  {
    path: "/Summary",
    alias: "/Summary",
    name: "Summary",
    component: () => import("./components/Summary"),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
