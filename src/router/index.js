import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// auther Guards
import { projectAuth } from "@/configs/firebase";

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) next({ name: "login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      text: "Hey Hợp",
      leading: true,
      isFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "auth",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      text: "Hợp",
      leading: false,
      isFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
  {
    path: "/budget",
    name: "budget",
    meta: {
      text: "Bubget",
      leading: false,
      isFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget.vue"),
  },
  {
    path: "/report",
    name: "report",
    meta: {
      text: "report",
      leading: false,
      isFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "NewTransaction",
      leading: false,
      isFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "new-transaction" */ "../views/new-transaction.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
