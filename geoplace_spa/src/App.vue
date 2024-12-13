

<script setup>
    import { RouterLink, RouterView, useRouter } from 'vue-router'
    import {onMounted} from 'vue'
    
    onMounted(()=> {
         const router = useRouter();
         // verify user login, after redirect
         router.push("/indexPage");
    });
</script>

<template>
    <main><RouterView/></main>
</template>
