
<script setup>
import {ref} from 'vue'
import Email from './component_s/email.vue'
import Notify from './component_s/notify_popup.vue'
import { onBeforeMount } from 'vue';
import Apicf from './../../apiconfig.mjs'
import { useRouter } from 'vue-router';

const email_ref = ref(null)
const app_route = useRouter();

const popup_attributes = ref({
    show_loading: true,
    goto: undefined,
    button_text: 'Ok, tudo certo',
    message: 'Opa, tudo joia meu parça',
    icon: 'warning.png'
})
const show_poup = ref(false)

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
    if (!email_ref.value.status) return
    show_poup.value = true;
    popup_attributes.value.show_loading = true;
    
    try {
        const body = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({user_email:email_ref.value.addres})
        }
        
        const res = await fetch(Apicf.API_URL+'/get-new-scode',body);
        if (res.status == 401 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Essa conta já foi ativada, você já pode efetuar login..'
            popup_attributes.value.goto = '/login'
            popup_attributes.value.button_text = 'login'
            window.localStorage.removeItem('gpl_isPendg')
        }
        if (res.status == 404 || res.status == 400) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Não há nenhuma conta cadastrada com esse endereço de email'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'fechar'
        }
        
        if (res.status == 429 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Você não pode mais solicitar códigos de ativação, tente novamente em 30 minutos'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'fechar'
        }
        if (res.status == 200 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Tudo certo, enviamos um novo link para o seu endereço de email'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'fechar'
            window.localStorage.setItem('gpl_isPendg','ok')
        }

    }catch(e) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Ué, Nosso servidor não está respondendo, por favor volte outra hora!!'
        popup_attributes.value.goto = undefined
        popup_attributes.value.button_text = 'fechar'
    }
}

</script>
    
<template>
    <div id='getNLink-page'>
        <Notify
            :attributes=popup_attributes
            v-if='show_poup'
            @close-popup='()=>{show_poup = !show_poup}'
        />
    <main>
        <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
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
    height: 100vh;
}
main {
    width: min(430px,80%);
}
img {
    display: block;
    width: 110px;
    margin: 0 auto;
    margin-bottom: 10px;
    align-self: center;
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
