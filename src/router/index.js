import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Etape1 from "../components/Etape1.vue";
// import Etape2 from "../components/Etape2.vue";
// import Etape3 from "../components/Etape3.vue";
import Steps from "../views/Steps.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: '/1',
  //   name: '1',
  //   component: Etape1
  // },
  // {
  //   path: '/2',
  //   name: '2',
  //   component: Etape2
  // },
  // {
  //   path: '/3',
  //   name: '3',
  //   component: Etape3
  // },
  {
    path: "/create",
    name: "steps",
    component: Steps,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
