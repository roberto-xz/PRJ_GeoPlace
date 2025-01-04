<script setup>
import { onBeforeMount } from "vue";
import { useRoute } from 'vue-router'
const route = useRoute()

onBeforeMount(()=>{
    console.log(route.params.token)
})
</script>

<template>
    <div id="active-page">
        <header>
            <i class='material-icons'>&#xe0be;</i>
            <h1> Pedir Novo Link <br></h1>
        </header>
        <!-- <p>Enviamos um e-mail de ativação para seu email. <br> Por favor, verifique sua caixa de entrada</p> -->
        <button id='bnt-to-app'>Não recebeu o Email?</button>
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
        header {
            display: block;
            width: 60%;
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
                width: 70%;
                display: block;
                text-align: center;
                margin-top: 25px;
                color: dimgray;
                font: normal 1rem/1 "Manjari";
            }
     #bnt-to-app {
        display: block;
        background-color: black;
        border: 1px solid black;
        width: 70%;
        padding: 3% 10px;
        text-align: center;
        margin: 40px auto 2% auto;
        color: var(--whit-color);
        font: bolder .9rem/1 "Manjari";
        cursor: pointer;
    }
</style>