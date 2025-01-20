

<script setup>
    import { useRouter, useRoute} from "vue-router";
    const app = useRouter()
    const err =  useRoute()
    const code = err.params.code 

    const imgs = {
        '404': '/res/http_status/404.svg',
        '403': '/res/http_status/403.svg',
        '500': '/res/http_status/500.svg'
    }
    const url = imgs[code] || imgs['404']
    const goToHome = ()=>{  app.push('/home')}
    console.log(url)
</script>

<template>
    <main>
        <img v-bind:src='url' alt='a 404 page'>
        <button @click='goToHome()'>Voltar</button>
    </main>
</template>

<style scoped>

main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 80vh;
}

img {
    user-select: none;
    width: 50%;
}
button{
    display: block;
    background-color: #12662bff;
    border: 1px solid #12662bff;
    width: 70%;
    padding: 3% 10px;
    margin: 40px auto 2% auto;
    color: var(--whit-color);
    font: bolder 1rem/1 "Manjari";
    cursor: pointer;
}
</style>
