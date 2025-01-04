

<script setup>
    import { RouterLink, RouterView, useRouter } from 'vue-router'
    // import {onMounted} from 'vue'
    
    // onMounted(()=> {
    //      const router = useRouter();
    //      const app_token = window.localStorage.getItem('geoplaceToken');
    //      const secret = 'VGhlcmUncyBubyB3YXksIE9kYSBpcyBhIGdlbml1cw==';

    //      if (app_token == secret ) {
    //         router.push('/accountCreated')
    //         return;
    //     }
    //      // verify user login, after redirect
    //      // router.push("/indexPage");
    // });
</script>

<template>
    <main><RouterView/></main>
</template>
