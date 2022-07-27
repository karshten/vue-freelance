import { createRouter, createWebHistory } from 'vue-router'
import Main from "../views/Main.vue";
import SignIn from "../components/AuthComponents/SignIn.vue";
import SignUp from "../components/AuthComponents/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn
    },
  ]
})

export default router
