
<script setup>
    import {ref} from "vue"
    import {useRouter} from 'vue-router'
    import appHeader from "./component_s/app_header.vue";
    import appRmenu  from "./component_s/app_rmenu.vue"
    import cardFeeds from "./component_s/app_card_feed.vue"

    const router = useRouter()
    const rmenu_opened = ref(false)


    const toogleMenu = function() {
        rmenu_opened.value = !rmenu_opened.value;
    }

    const goToDetails = ()=>{ router.push('/detailsPage')}
</script>

<template> 
<div>
    <appHeader @open-rmenu = "toogleMenu" page_title="Pagina principal"/>
    <appRmenu v-if="rmenu_opened" @close-rmenu = "toogleMenu"/>
    <cardFeeds @open-card="goToDetails(x)"/>
</div>
</template>

<style scoped>
</style>