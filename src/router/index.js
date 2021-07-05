import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from "../views/LoginForm.vue";
import RegistrationForm from "../views/RegistrationForm.vue";
import Dashboard from "../views/Dashboard.vue";
import EditEmployeeForm from "../views/EditEmployeeForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "Sign Up",
    component: RegistrationForm,
  },
  {
    path: "/dashboard/:user_id",
    name: "Dashboard",
    component: Dashboard,
    props: true,
  },
  {
    path: "/account/edit/:user_id",
    name: "EditEmployeeForm",
    component: EditEmployeeForm,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
