
<script setup>
import { onMounted, ref, onBeforeMount } from "vue";
import { useRoute } from 'vue-router'
import Notify from './component_s/notify_popup.vue'
import Apicf from './../../apiconfig.mjs'

const app_querie =  useRoute()
const scode = app_querie.params.scode;
const show_poup = ref(false)

const popup_attributes = ref({
    show_loading: true,
    goto: undefined,
    button_text: 'Ok, tudo certo',
    message: 'Opa, tudo joia meu parça',
    icon: 'warning.png'
})

onMounted(async ()=> {
    popup_attributes.value.show_loading = true;
    show_poup.value = true;
    let resp_status = 500;
    
    try {
        const body = {
            method: 'PUT',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({ gp_scode: scode || ''})
        }
        const res = await fetch(Apicf.API_URL+'/ative',body)
        resp_status = res.status;
    }
    catch(e){resp_status = 500;}
    
    if (resp_status == 200 ) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Parabéns sua conta foi ativa, Você já pode acessar sua conta'
        popup_attributes.value.goto = '/login'
        popup_attributes.value.button_text = 'Entrar'    
        window.localStorage.removeItem('gpl_isPendg')
    }

    if (resp_status == 400 || resp_status == 401 ) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Opá, Parece que esse link não é mais válido, peça um novo link'
        popup_attributes.value.goto = '/getNewLink'
        popup_attributes.value.button_text = 'Pedir novo link'    
    }

    if (resp_status == 500 ) {
        setTimeout(()=>{
            popup_attributes.value.show_loading = false;
        },200);
        popup_attributes.value.message = 'Parece que há um erro no servidor, por favor tente mais tarde'
        popup_attributes.value.goto = '/error/500'
        popup_attributes.value.button_text = 'fechar'    
    }
})
</script>

<template>
    <div id='ative-page'>
        <Notify
            :attributes=popup_attributes
            v-if='show_poup'
            @close-popup='()=>{show_poup = !show_poup}'
        />
    </div>
</template>

<style scoped>
#ative-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
}
</style>
