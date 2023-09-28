import * as vueRouter from "vue-router";
import CuteCard from './components/CuteCard.vue'; 
import Profile from './components/Profile.vue'; 
import WishList from './components/WishList.vue'; 


const routes = [
  {
    path: "/",
    name: "CuteCard",
    component: CuteCard
  },
  {
    path: "/profile",
    name: "Profile",
    component: WishList
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: routes
});

export default router;
