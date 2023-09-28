import * as vueRouter from "vue-router";
import CuteCard from './components/CuteCard.vue'; 
import WishList from './components/WishList.vue'; 


const routes = [
  {
    path: "/",
    name: "CuteCard",
    component:() => import('./components/CuteCard.vue')
  },
  {
    path: "/profile",
    name: "Profile",
    component:() => import('./components/WishList.vue')
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: routes
});

export default router;
