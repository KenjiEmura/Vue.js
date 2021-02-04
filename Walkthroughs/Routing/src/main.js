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

    { path: "/users", components: { default: UsersList, footer: UsersFooter } },

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

router.beforeEach( (to, from, next) => {
  console.log('Global beforeEach')
  console.log(to, from)
  next();
})

const app = createApp(App);

app.use(router);

app.mount("#app");
