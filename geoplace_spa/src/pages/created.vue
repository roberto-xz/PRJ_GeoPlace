
<script setup>
import { onBeforeMount } from "vue";
import { useRouter } from 'vue-router'

const app_router = useRouter();

onBeforeMount(()=>{
    let login_token = window.localStorage.getItem('gpl_lgToken');
    let account_sts = window.localStorage.getItem('gpl_isPendg')

    if (login_token) app_router.push('/error/403');
    if (account_sts == null) app_router.push('/error/403');
})

</script>

<template>
    <div id="active-page">
        <main>
            <header>
                <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
                <h1> Conta pendente</h1>
            </header>
            <p> Enviamos um e-mail de ativação para seu email. 
            Por favor, verifique sua caixa de entrada e clique no link para ativar sua conta </p>
            <button id='bnt-to-app'
                @click="()=>{app_router.push('/getNewLink')}">
                Não recebeu o Email?
            </button>
    </main>
    </div>
</template>

<style scoped>
    #active-page {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        width: 100vw;
        height: 80vh;
    }
    main {
        width: min(430px, 85%);
    }
        header {
            display: block;
            width: 100%;
        }

img {
    display: block;
    width: 100px;
    margin: 0 auto;
    margin-bottom: 10px;
    align-self: center;
}


            i {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 3.5rem;
                color: seagreen;
                margin-bottom: 25px;
            }
            h1 {
                display: block;
                text-align: center;
                font: bolder 1.4rem/1 "Manjari";
            }
            p {
                width: 100%;
                display: block;
                text-align: center;
                margin-top: 25px;
                color: dimgray;
                font: normal 1rem/1.3 "Manjari";
            }
     #bnt-to-app {
        display: block;
        background-color: darkgreen;
        border: 1px solid darkgreen;
        width: 100%;
        padding: 3% 10px;
        text-align: center;
        margin: 40px auto 2% auto;
        color: var(--whit-color);
        font: bolder .9rem/1 "Manjari";
        cursor: pointer;
    }
</style>
