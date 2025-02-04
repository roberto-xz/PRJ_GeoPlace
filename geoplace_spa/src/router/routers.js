
import { createRouter, createWebHistory } from 'vue-router'
// import loginPage from ''

const routers = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {path: '/indexPage',name:'index',component: ()=> import('../pages/indexPage.vue')},
    {path: '/login',name:'login',component: ()=> import('../pages/login.vue')},
    {path: '/sigin',name:'sigin',component: ()=> import('../pages/sigin.vue')},
    {path: '/ative/:scode',name:'active',component: ()=> import('../pages/ative.vue')},
    {path: '/created',component: ()=> import('../pages/created.vue')},
    {path: '/getNewLink',component: ()=> import('../pages/getNewLink.vue')},
    {path: '/updatePerfil',name:'perfl',component: ()=> import('../pages/updatePerfil.vue')},
    {path: '/home',name:'mainp',component: ()=> import('../pages/home.vue')},
    {path: '/detailsPage',name:'details',component: ()=> import('../pages/detailsPage.vue')},
    {path: '/favoritesPage',name:'favorites',component: ()=> import('../pages/favoritesPage.vue')},
    {path: '/userAds',name:'userAdsPage',component: ()=> import('../pages/userAdsPage.vue')},
    {path: '/about',name:'about',component: ()=> import('../pages/aboutPage.vue')},
    {path: '/help',name:'help',component: ()=> import('../pages/helpPage.vue')},
    {path: '/terms',name:'userTerms',component: ()=> import('../pages/userTermsPage.vue')},
    {path: '/recoverypwd',name:'recpwd',component: ()=> import('../pages/recoveryPassword.vue')},
    {path: '/updatepwd/:scode',name:'updpwd',component: ()=> import('../pages/updatePassword.vue')},
    {path: '/:pathMatch(.*)*/:code', name: 'notFound', component: ()=> import('../pages/errors.vue')},
    {path: '/createProducts', name: 'crProducts', component: ()=> import('../pages/createProduct.vue')},
  ],
  
});

export default routers
