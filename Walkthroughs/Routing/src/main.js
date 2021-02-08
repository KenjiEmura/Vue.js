import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import UsersFooter from "./components/users/UsersFooter.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import NotFound from "./components/nav/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },

    {
      name: "teams",
      path: "/teams",
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ],
    },

    {
      name: "users",
      path: "/users",
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter() {
        console.log("users beforeEnter");
        // console.log("To: ", to, "\n\n", "From: ", from, "\n\n");
        // if (from.name === "teams") {
        //   next({ name: "team-members", params: { teamId: "t2" } });
        // } else {
        //   next();
        // }
      },
    },

    { path: "/404", component: NotFound },

    { path: "/:notFound(.*)", redirect: "/404" },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  console.log("Global beforeEach");
  // if (to.name === "team-members") {
  //   next();
  // } else {
  //   next({ name: "team-members", params: { teamId: "t2" } });
  // }
  next();
});

router.afterEach(() => {
  console.log("Global afterEach");
});

const app = createApp(App);

app.use(router);

app.mount("#app");
