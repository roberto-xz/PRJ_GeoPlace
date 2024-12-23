
<script setup>
    import {ref} from "vue"
    import {useRouter} from 'vue-router'
    import appHeader from "./component_s/app_header.vue";
    import appRmenu  from "./component_s/app_rmenu.vue"
    import cards from "./component_s/app_cardv1.vue"

    const router = useRouter()
    const rmenu_opened = ref(true)

    const toogleMenu = function() {
        rmenu_opened.value = !rmenu_opened.value;
    }

    const goToDetails = ()=>{
        router.push('/detailsPage')
    }
</script>

<template> 
<div>
    <appHeader @open-rmenu = "toogleMenu"/>
    <appRmenu v-if="rmenu_opened" @close-rmenu = "toogleMenu"/>
    <cards @open-card="goToDetails()"/>
</div>
</template>