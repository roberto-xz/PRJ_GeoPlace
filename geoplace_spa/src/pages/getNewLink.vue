
<script setup>
import {ref} from 'vue'
import Email from './component_s/email.vue'
import { onBeforeMount } from 'vue';
import Apicf from './../../apiconfig.mjs'
import { useRouter } from 'vue-router';

const email_ref = ref(null)
const app_route = useRouter();

onBeforeMount(async ()=> { 
        let login_token = window.localStorage.getItem('gpl_lgToken');
        if (login_token != null) {
            console.log('há um token de sessão, tentando validar');
            const body = {
                method: 'POST',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify({
                    user_token: login_token || ''
                })
            }
            try {
                const resp = await fetch(Apicf.API_URL+'/check-token',body)
                if (resp.status == 200 ) {
                    return app_route.push('/home')
                }
                window.login_token.removeItem('gpl_lgToken')
                return
            }
            catch(e){return}
        }
})

const send = async ()=>{
    const diagnostic = document.getElementById('diagnostics')
    if (!email_ref.value.status) return

    try {
        const body = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({user_email:email_ref.value.addres})
        }

        const res = await fetch(Apicf.API_URL+'/get-new-scode',body);
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
                // usuário já está ativo
                diagnostic.style.opacity = 1;
                diagnostic.style.backgroundColor = 'seagreen';
                diagnostic.innerText = 'Essa conta já está ativa.. Redirecioando'
                setTimeout(()=>{
                    diagnostic.style.opacity = 0;
                    diagnostic.style.backgroundColor = 'rgba(236,127,127)'
                    window.localStorage.removeItem('gpl_isPendg')
                    app_route.push('/login')
                },4000);
                return
            break;
            case 429:
                diagnostic.style.opacity = 1;
                diagnostic.innerText = 'Muitas Tentativas, Tente outra hora';
                setTimeout(()=>{
                    diagnostic.style.opacity = 0;
                },2000)
            break;
            case 200:
                app_route.push('/created')
                return
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
    <div id='getNLink-page'>
    <main>
        <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
        <div id='diagnostics'>Messagens aki</div>
        <h1>Não recebeu o email de ativação?</h1>
        <p id='desc'>
            Então informe o endereço
            de email utilizado no momento do cadastro, para que possamos enviar um 
            novo link de ativação..
        </p>
        <Email ref="email_ref"/>
        <button @click='send()'>Enviar Código</button>
    </main>
    </div>
</template>

<style scoped>
#getNLink-page {
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
    padding: 4% 10px;
    text-align: center;
    margin: 40px auto 2% auto;
    color: var(--whit-color);
    font: bolder 1rem/1 "Manjari";
    cursor: pointer;
}
</style>
