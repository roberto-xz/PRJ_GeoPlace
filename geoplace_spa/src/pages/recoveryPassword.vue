
<script setup>
import {ref} from 'vue'
import Email from './component_s/email.vue'
import { onBeforeMount } from 'vue';
import Apicf from './../../apiconfig.mjs'
import checkAcess from '../../utils/checkAcess.mjs';
import { useRouter } from 'vue-router';

const email_ref = ref(null)
const app_route = useRouter();

onBeforeMount(()=>{ checkAcess(useRouter())})

const send = async ()=>{
    const diagnostic = document.getElementById('diagnostics')
    if (!email_ref.value.status) return

    try {
        const body = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({user_mail:email_ref.value.addres})
        }

        res = await fetch(Apicf.API_URL+'/recovery-pwd',body);
        switch(res.status){
            case 404:
                diagnostic.style.opacity = 1;
                diagnostic.innerText = 'Usuário Não Encontrado'
                setTimeout(()=>{
                    diagnostic.style.opacity = 0;
                },2000)
            break;
            case 401:
                app_route.push('/getNewLink')
            break;
            case 429:
                diagnostic.style.opacity = 1;
                diagnostic.innerText = 'Muitas Tentativas, Tente outra hora';
                setTimeout(()=>{
                    diagnostic.style.opacity = 0;
                },2000)
            break;
            case 200:
                app_route.push('/updatePassword')
            break;
        }
    }catch(e){
        diagnostic.style.opacity = 1;
        diagnostic.innerText = 'Servidor Offline'
        setTimeout(()=>{
            diagnostic.style.opacity = 0;
        }, 2000);
    }
}

</script>
    
<template>
    <div id='recPwd-page'>
    <main>
        <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
        <div id='diagnostics'>Messagens aki</div>
        <Email ref="email_ref"/>
        <button @click='send()'>Recuperar</button>
    </main>
    </div>
</template>

<style scoped>
#recPwd-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70vh;
}
main {width: 70%;}
img {
    display: block;
    width: 110px;
    margin: 0 auto;
    margin-bottom: 10px;
    align-self: center;
}
#diagnostics {
    display: block;
    transition: .6s;
    width: 100%;
    opacity: 0;
    text-align: center;
    background-color: rgb(236, 127, 127);
    font: bolder .8rem/1 "Manjari";
    color: #f3f3f3;
    padding: 3%;
}

button {
    display: block;
    background-color: darkgreen;
    border: 1px solid var(--gren-color);
    width: 100%;
    padding: 4% 10px;
    text-align: center;
    margin: 40px auto 2% auto;
    color: var(--whit-color);
    font: bolder 1rem/1 "Manjari";
    cursor: pointer;
}
</style>
