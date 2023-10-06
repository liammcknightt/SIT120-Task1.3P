import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DesignsAndTasksView from "@/views/DesignsAndTasksView"
import AboutView from "@/views/AboutView"
import ContactView from "@/views/ContactView"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/designsandtasks",
    name: "designsandtasks",
    component: DesignsAndTasksView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
