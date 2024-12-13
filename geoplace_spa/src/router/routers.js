
import { createRouter, createWebHistory } from 'vue-router'
// import loginPage from ''

const routers = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {path: '/indexPage',name:'index',component: ()=> import('../pages/indexPage.vue')},
    {path: '/loginPage',name:'login',component: ()=> import('../pages/loginPage.vue')}
  ],
  
});

export default routers
