
import { createRouter, createWebHistory } from 'vue-router'
// import loginPage from ''

const routers = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {path: '/indexPage',name:'index',component: ()=> import('../pages/indexPage.vue')},
    {path: '/loginPage',name:'login',component: ()=> import('../pages/loginPage.vue')},
    {path: '/siginPage',name:'sigin',component: ()=> import('../pages/siginPage.vue')},
    {path: '/active/:token',name:'active',component: ()=> import('../pages/active.vue')},
    {path: '/accountCreated',component: ()=> import('../pages/accountCreated.vue')},
    {path: '/getLinkToActiveAccount',component: ()=> import('../pages/getLinkToActiveAccount.vue')},
    {path: '/updatePerfil',name:'perfl',component: ()=> import('../pages/updatePerfil.vue')},
    {path: '/geoplace_',name:'mainp',component: ()=> import('../pages/geoplace_.vue')},
    {path: '/detailsPage',name:'details',component: ()=> import('../pages/detailsPage.vue')},
    {path: '/favoritesPage',name:'favorites',component: ()=> import('../pages/favoritesPage.vue')},
    {path: '/userAds',name:'userAdsPage',component: ()=> import('../pages/userAdsPage.vue')},
    {path: '/about',name:'about',component: ()=> import('../pages/aboutPage.vue')},
    {path: '/help',name:'help',component: ()=> import('../pages/helpPage.vue')},
    {path: '/terms',name:'userTerms',component: ()=> import('../pages/userTermsPage.vue')},
  ],
  
});

export default routers
