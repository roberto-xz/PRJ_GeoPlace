
<script setup>
import {ref} from 'vue'
import Email from './component_s/email.vue'
import { onBeforeMount } from 'vue';
import Apicf from './../../apiconfig.mjs'
import Notify from './component_s/notify_popup.vue'
import checkAcess from '../../utils/checkAcess.mjs';
import { useRouter } from 'vue-router';

const email_ref = ref(null)
const show_poup = ref(false)

const popup_attributes = ref({
    show_loading: true,
    goto: undefined,
    button_text: 'Ok, tudo certo',
    message: 'Opa, tudo joia meu parça',
    icon: 'warning.png'
})
onBeforeMount(()=>{ checkAcess(useRouter())})

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

        const res = await fetch(Apicf.API_URL+'/recovery-pwd',body);
        
        if (res.status == 404 || res.status == 400) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            
            popup_attributes.value.message = 'Esse email não está registrado em nossa base de dados'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'Fechar'
            return
        }

        if (res.status == 401 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Opá, Parece que sua conta ainda não foi ativada, peça um novo link de ativação'
            popup_attributes.value.goto = '/getNewLink'
            popup_attributes.value.button_text = 'Pedir novo Link'
            return
        }
 
        if (res.status == 429 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Você não pode mais solicitar códigos de ativação, tente novamente em 30 minutos'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'fechar'
            return
        }

        if (res.status == 200 ) {
            setTimeout(()=>{
                popup_attributes.value.show_loading = false;
            },200);
            popup_attributes.value.message = 'Tudo certo, enviamos um novo link para o seu endereço de email'
            popup_attributes.value.goto = undefined
            popup_attributes.value.button_text = 'fechar'
        }
    }catch(e){
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
    <div id='recPwd-page'>
    <Notify
        :attributes=popup_attributes
        v-if='show_poup'
        @close-popup='()=>{show_poup = !show_poup}'
    />
    <main>
        <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
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
    padding: 5% 10px;
    text-align: center;
    margin: 5px auto 2% auto;
    color: var(--whit-color);
    font: bolder 1rem/1 "Manjari";
    cursor: pointer;
}
</style>
