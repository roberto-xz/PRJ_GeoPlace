
<script setup>
    import { onMounted } from 'vue'
    import {useRouter} from 'vue-router'
    
    const router = useRouter();
    const toSiginPage = ()=> {router.push('/siginPage')}
    const toFeedsPage = ()=> {router.push('/feedsPage')}
    const toLoginPage = ()=> {router.push('/loginPage')}
</script>

<template>
    <div id="app-page">
        <img src="/res/logo.png" alt="geoplace logo image"/>
        <button @click="toSiginPage()">Criar uma conta</button>
        <span @click="toFeedsPage()" id="span_01">Conhecer o App</span>
        <span @click="toLoginPage()" id="span_02">Fazer login</span>
    </div>
</template>

<style scoped>
    #app-page {
        display: block;
        width: 90vw;
        height: 40vh;
        background-color: #f0f8ff;
    }
    div > img {
        display: block;
        width: 150px;
        margin: 0 auto;
        margin-bottom: 3%;;
    }

    button {
        display: block;
        background-color: var(--gren-color);
        width: 79%;
        padding: 4%;
        text-align: center;
        border-radius: 5px;
        border: var(--gren-color);
        box-shadow: 1px 2px 5px #919191;
        margin: 0 auto;
        color: var(--whit-color);
        font: bolder 1rem/1 Sans-serif;
    }
    #span_01, #span_02 {
        display: block;
        width: 79%;
        text-align: right;
        margin: 0 auto;
        margin-top: 10px;
        color: var(--blue-color);
        font: bolder .9rem/1 Sans-serif;
        user-select: none;
    }

    #span_02 {
        text-align: left;
        font: bolder 1rem/1 Sans-serif;
        text-decoration: underline;
        margin-top: 10px;
    }
</style>