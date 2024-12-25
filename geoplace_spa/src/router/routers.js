
import { createRouter, createWebHistory } from 'vue-router'
// import loginPage from ''

const routers = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {path: '/indexPage',name:'index',component: ()=> import('../pages/indexPage.vue')},
    {path: '/loginPage',name:'login',component: ()=> import('../pages/loginPage.vue')},
    {path: '/siginPage',name:'sigin',component: ()=> import('../pages/siginPage.vue')},
    {path: '/validPage',name:'valid',component: ()=> import('../pages/validPage.vue')},
    {path: '/updatePerfil',name:'perfl',component: ()=> import('../pages/updatePerfil.vue')},
    {path: '/geoplace_',name:'mainp',component: ()=> import('../pages/geoplace_.vue')},
    {path: '/detailsPage',name:'details',component: ()=> import('../pages/detailsPage.vue')},
    {path: '/favoritesPage',name:'favorites',component: ()=> import('../pages/favoritesPage.vue')}
  ],
  
});

export default routers
