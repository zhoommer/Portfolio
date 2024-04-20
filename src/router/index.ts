import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import About from "../views/About.vue";
import CryptoTable from "../views/CryptoTable.vue";
import Todo from "../views/Todo.vue";
import DailyExpence from "../views/DailyExpense.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/projects/crypto-table",
      name: "Crypto Table",
      component: CryptoTable,
    },
    {
      path: "/projects/todo",
      name: "ToDo",
      component: Todo,
    },
    {
      path: "/projects/daily-expense",
      name: "Daily Expence",
      component: DailyExpence,
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

export default router;
