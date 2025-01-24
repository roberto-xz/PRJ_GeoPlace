
<script setup>
    import {useRoute} from "vue-router";
    const err =  useRoute()
    const code = err.params.code 

    const imgs = {
        '404': '/res/http_status/404.svg',
        '403': '/res/http_status/403.svg',
        '500': '/res/http_status/500.svg'
    }
    const url = imgs[code] || imgs['404']
</script>

<template>
    <div id='erros-page'>
        <main>
            <img v-bind:src='url' alt='a 404 page'>
        </main>
    </div>
</template>

<style scoped>

#erros-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

main {
    text-align: center;
    width: min(430px, 85%)
}

img {
    user-select: none;
    width: 50%;
}
</style>
