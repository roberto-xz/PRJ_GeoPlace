
<script setup>
import {ref} from 'vue'
import Passw from './component_s/passw.vue'

import { onBeforeMount } from 'vue';
import Apicf from './../../apiconfig.mjs'
import Notify from './component_s/notify_popup.vue'
import checkAcess from '../../utils/checkAcess.mjs';
import { useRoute, useRouter } from 'vue-router';

const passw_ref = ref(null)
const show_poup = ref(false)
const scode = useRoute().params.scode;


const popup_attributes = ref({
    show_loading: true,
    goto: undefined,
    button_text: 'Ok, tudo certo',
    message: 'Opa, tudo joia meu parça',
    icon: 'warning.png'
})

onBeforeMount(()=>{ checkAcess(useRouter())})

const send = async ()=> {
    if (!passw_ref.value.status) return
    show_poup.value = true;
    popup_attributes.value.show_loading = true;
    let resp_status = 200;
    console.log(scode)
    try {
        const body = {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                gp_code: scode,
                unpassw: passw_ref.value.passwd
            })
        };
        const res = await fetch(Apicf.API_URL+'/update-pwd',body);
        resp_status = res.status;
    }
    catch(e){
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Ué, Nosso servidor não está respondendo, por favor volte outra hora!!'
        popup_attributes.value.goto = undefined
        popup_attributes.value.button_text = 'fechar'
        return
    }

    if (resp_status == 200 ) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.icon = 'sucsess.png'
        popup_attributes.value.message = 'Sua senha foi atualizada com sucesso!, Agora você pode fazer login com sua nova senha.'
        popup_attributes.value.goto = '/login'
        popup_attributes.value.button_text = 'entrar'
    }
    
    if (resp_status == 400 ) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Sua senha não está em um formato válido, tente outra senha'
        popup_attributes.value.goto = undefined
        popup_attributes.value.button_text = 'fechar'
    }
    
    if (resp_status == 401 ) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Esse link não é valido, Por favor peça um novo link para redefinir sua senha'
        popup_attributes.value.goto = '/recoverypwd'
        popup_attributes.value.button_text = 'Pedir novo link'
    }
    
    if (resp_status == 408 ) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Link expirado, Por favor peça um novo link para redefinir sua senha'
        popup_attributes.value.goto = '/recoverypwd'
        popup_attributes.value.button_text = 'Pedir novo link'
    }
    
    if (resp_status == 412 ) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Por algum motivo desconhecido, sua senha não foi atualizada, tente novamente'
        popup_attributes.value.goto = undefined
        popup_attributes.value.button_text = 'fechar'
    }
}
 </script>
    
<template>
    <div id='updPwd-page'>
        <Notify
            :attributes=popup_attributes
            v-if='show_poup'
            @close-popup='()=>{show_poup = !show_poup}'
        />
        <main>
            <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
            <header>
                <h1>Crie sua nova senha</h1>
                <h5>
                Escolha uma nova senha para sua conta. Certifique-se de que 
                ela tenha pelo menos 8 caracteres, incluindo números, letras e simbolos.
                </h5>
            </header>
            <Passw ref="passw_ref"/>
            <button @click='send()'>Atualizar</button>
        </main>
    </div>
</template>

<style scoped>
#updPwd-page {
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
img {
    display: block;
    width: 110px;
    margin: 0 auto;
    margin-bottom: 10px;
    align-self: center;
}

header {
    display: block;
    width: 100%;
    margin: 20px 0;
}
    header h1 {
        width: 100%;
        text-align: center;
        font: bolder 1.5rem/1 "Manjari";
    }
    header h5 {
        width: 100%;
        text-align: center;
        font: normal 1rem/1 "Manjari";
        margin-top: 2%;
        margin-bottom: 10%;
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
