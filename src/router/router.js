import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";
import Cv from "../views/Cv.vue";
import Login from "../views/Login.vue";
import MainNavbar from "../layout/MainNavbar.vue";
import MainFooter from "../layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/work/cv",
      name: "cv",
      components: { default: Cv, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/orbit/login",
      name: "login",
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// mode: 'history',
//   routes: [
//   {
//     path: '/',
//     name: 'customers',
//     alias: '/customer',
//     component: CustomersList,
//     children: [
//       {
//         path: '/customer/:id',
//         name: 'customer-details',
//         component: Customer,
//         props: true,
//       },
//     ],
//   },
