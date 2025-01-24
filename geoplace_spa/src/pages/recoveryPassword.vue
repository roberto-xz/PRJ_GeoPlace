
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
            body: JSON.stringify({user_email:email_ref.value.addres})
        }

        const res = await fetch(Apicf.API_URL+'/recovery-pwd',body);
        console.log(res.status)
        switch(res.status){
            case 404:
                diagnostic.style.opacity = 1;
                diagnostic.innerText = 'Usuário Não Encontrado'
                setTimeout(()=>{
                    diagnostic.style.opacity = 0;
                },2000)
            break;
            case 401:
                // conta não está ativada
                app_route.push('/getNewLink')
            break;
            case 429:
                diagnostic.style.opacity = 1;
                diagnostic.innerText = 'Muitas Tentativas, Tente outra hora';
                setTimeout(()=> {
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
        console.log(e)
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
        <h1>Você esqueceu sua senha?</h1>
        <p id='desc'>
            Informe o endereço de email usado no momento do cadastro,
            e iremos te enviar um link para recadastro de senha..
        </p>
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
main {width: 80%;}
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
    padding: 2% 0;
    margin-bottom: 20px;
}
h1 {
    width: 100%;
    text-align: center;
    color: #000;
    margin-bottom: 5px;
    font: bolder 1.4rem/1 "Manjari";
}

#desc {
    width: 100%;
    text-align: center;
    margin-top: 3%;
    color: #717171;
    font: bolder .9rem/1.4 "Manjari";
    padding: 10px 0;
}  

button {
    display: block;
    background-color: darkgreen;
    border: 1px solid var(--gren-color);
    width: 100%;
    padding: 5% 10px;
    text-align: center;
    margin: 5px auto 2% auto;
    color: var(--whit-color);
    font: bolder 1rem/1 "Manjari";
    cursor: pointer;
}
</style>
