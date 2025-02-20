
<script setup>
import {ref, onBeforeMount} from 'vue'
import { useRouter} from "vue-router";
import Apicf from './../../apiconfig.mjs'
import Email from './component_s/email.vue'
import Passw from './component_s/passw.vue'
import Notify from './component_s/notify_popup.vue'

import checkAcess from '../../utils/checkAcess.mjs';
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

const sigin = async ()=> {
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
        
        const res = await fetch(Apicf.API_URL+'/sigin',body);
        
        if (res.status == 400 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Parece que sua senha ou seu email não estão em um formato válido'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'fechar'    
        }
        if (res.status == 409 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Esse endereço de email já foi cadastrado na platforma'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'fechar'    
        }

        if (res.status == 500 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Parece que há um erro no servidor, por favor tente mais tarde'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'fechar'    
        }
        
        if (res.status == 200 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Parabéns sua conta foi criada, enviamos um link de ativação para seu email'
            popup_attributes.value.goto = '/created'
            popup_attributes.value.button_text = 'Ok'    
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
   <div id="sigin-page">
    <Notify
        :attributes=popup_attributes
        v-if='show_poup'
        @close-popup='()=>{show_poup = !show_poup}'
    />
    <main>
        <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
        <header>
            <h1>Seja bem-vindo</h1>
            <h5>Crie sua conta e aproveite todas as vantagens da plataforma</h5>
        </header>
        <Email ref='email_ref'/>
        <Passw ref='passw_ref'/>
        <button id='bnt-sigin' @click='sigin'>Criar conta</button>
        <p>Já tem uma conta,
            <i @click='()=>{app_route.push("/login")}'>Entrar</i>
        </p>
    </main>
    </div>
</template>


<style scoped>

#sigin-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}                   

main{
    width: min(430px, 85%);
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
        margin: 5% 0 10% 0;
    }


img {
    display: block;
    width: 110px;
    margin: 0 auto;
    margin-bottom: 10px;
    align-self: center;
}

#bnt-sigin {
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
 
p {
    display: block;
    width: 100%;
    margin-top: 20px;
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
</style>
