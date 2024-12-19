
<script setup>
    import { onMounted } from 'vue'
    import {useRouter} from 'vue-router'
    const router = useRouter();

    const toSiginPage = ()=> {router.push('/siginPage')}
    const toLoginPage = ()=> {router.push('/loginPage')}
    // const toFeedsPage = ()=> {router.push('/feedsPage')}
</script>

<template>
    <div id="app-page">
        <img src="/res/logo.png" alt="geoplace logo image"/>
        <div id="bnts">
            <button id="bnt-login" @click="toLoginPage()">Entrar</button>
            <button id="bnt-sigin" @click="toSiginPage()">Criar uma conta</button>
        </div>
    </div>
</template>

<style scoped>
    #app-page {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100vw;
        height: 85vh;
    }
    img {
        display: block;
        width: 40vw;
        align-self: center;
        margin-top: 30vh;
    }
    #bnts {
        display: block;
        width: 100%;
        align-self: flex-end;
    }
    button {
        display: block;
        background-color: var(--gren-color);
        width: 90%;
        padding: 4%;
        text-align: center;
        margin: 3% auto;
        color: var(--whit-color);
        font: bolder 1rem/1 "Manjari";
        cursor: pointer;
    }

    #bnt-login{background-color: #3D677A; border: 1px solid #3D677A;}
    #bnt-sigin{background-color: #000000; border: 1px solid #000000;}
</style>