
<script setup>
    import {ref} from "vue"
    import {useRouter} from 'vue-router'
    import appHeader from "./component_s/app_header.vue";
    import appRmenu  from "./component_s/app_rmenu.vue"
    import cardsV1 from "./component_s/app_cardv1.vue"
    import cardsV2 from "./component_s/app_cardv2.vue"

    const router = useRouter()
    const rmenu_opened = ref(false)
    const currentComponent = ref(cardsV1);

    const toogleMenu = function() {
        rmenu_opened.value = !rmenu_opened.value;
    }
    const toogleComponent = function(component_id) {
        if (component_id == 1) currentComponent.value = cardsV1;
        if (component_id == 2) currentComponent.value = cardsV2;
    }

    const goToDetails = ()=>{ router.push('/detailsPage')}
</script>

<template> 
<div>
    <appHeader @open-rmenu = "toogleMenu"/>
    <appRmenu v-if="rmenu_opened" @close-rmenu = "toogleMenu"/>
    <component :is='currentComponent' @open-card="goToDetails()"/>
    
    <div id="nav-footer-menu">
        <button @click="toogleComponent(2)">Favoritos</button>
        <button @click="toogleComponent(1)">Home</button>
        <button>Meus Anuncios</button>
    </div>
</div>
</template>

<style scoped>
    #nav-footer-menu {
        position: fixed;
        bottom: 10px;
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        background: red;
    }

    #nav-footer-menu button {padding: 10px;}
</style>