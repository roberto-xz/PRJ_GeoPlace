
<script setup>
    import {ref} from "vue"
    import appHeader from "./component_s/app_header.vue";
    import appRmenu  from "./component_s/app_rmenu.vue"

    const rmenu_opened = ref(false)

    const toogleMenu = function() {
        rmenu_opened.value = !rmenu_opened.value;
    }

</script>

<template> <div>
    <appHeader
        @click-rmenu = "toogleMenu"
    />
    
    <appRmenu v-if="rmenu_opened"/>
</div></template>