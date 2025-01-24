
<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter} from "vue-router";

import checkAcess from '../../utils/checkAcess.mjs';
import Apicf from './../../apiconfig.mjs'
import Email from './component_s/email.vue'
import Passw from './component_s/passw.vue'
import Notify from './component_s/notify_popup.vue'
    
const email_ref = ref(null)
const passw_ref = ref(null)
const app_route = useRouter();
const show_poup = ref(false)

const popup_attributes = ref({
    show_loading: true,
    goto: undefined,
    button_text: 'Ok, tudo certo',
    message: 'Opa, tudo joia meu parça',
    icon: 'warning.png'
})

onBeforeMount(()=>{checkAcess(app_route)})

const login = async ()=> {
    if (!email_ref.value.status || 
        !passw_ref.value.status ) {
        return;
    }
    show_poup.value = true;
    popup_attributes.value.show_loading = true;
    
    try {
        const body = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify({
                user_mail: email_ref.value.addres,
                user_pass: passw_ref.value.passwd,
            })
        }
        
        const res = await fetch(Apicf.API_URL+'/login',body);
        if (res.status == 401 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Opá, Parece que sua conta ainda não foi ativada, peça um novo link de ativação'
            popup_attributes.value.goto = '/getNewLink'
            popup_attributes.value.button_text = 'Pedir novo Link'
            return
        }
        if (res.status ==  200) {
            const token = await res.json()
            window.localStorage.setItem('gpl_lgToken',token);
            app_route.push('/home')
        
        }else if (res.status == 404 || res.status == 400) {
             setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            
            popup_attributes.value.message = 'Credenciais inválidas, Verifique se você digitou o email e senha corretos'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'Fechar'
            return
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
    <div id="login-page">
    <Notify
        :attributes=popup_attributes
        v-if='show_poup'
        @close-popup='()=>{show_poup = !show_poup}'
    />
    <main>
        <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
        <header>
            <h1>Bem vindo de volta</h1>
            <h5>Digite suas Credenciais para acessar sua conta</h5>
        </header>
        <Email ref="email_ref"/>
        <Passw ref="passw_ref"/>
        <button @click="login()" id="bnt-login">Entrar</button>
        <p>Esqueceu a senha?, 
            <i @click='()=>{app_route.push("/recoverypwd")}'> Recuperar</i>
        </p>
        <p>Ainda não tem uma conta,
            <i @click='()=>{app_route.push("/sigin")}'> Criar um conta</i>
        </p>
    </main>
    </div>
</template>

<style scoped>

#login-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
main {
    width: min(430px,85%);
}

header {
    display: block;
    width: 100%;
    margin: 20px 0;
}
    header h1 {
        width: 100%;
        text-align: center;
        font: bolder 1.6rem/1 "Manjari";
    }
    header h5 {
        width: 100%;
        text-align: center;
        font: normal 1rem/1 "Manjari";
        margin-bottom: 10%;
    }

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

p {
    display: block;
    width: 100%;
    margin: 10px 0;
    text-align: center;
    color: dimgray;
    font: normal 1rem/1 "Manjari";
}

i {
    font: 900 .9rem/1 "Manjari";
    display: inline;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
#bnt-login {
    display: block;
    background-color: darkgreen;
    border: 1px solid var(--gren-color);
    width: 100%;
    padding: 4% 10px;
    text-align: center;
    margin: 40px auto 10% auto;
    color: var(--whit-color);
    font: bolder 1rem/1 "Manjari";
    cursor: pointer;
}
</style>
