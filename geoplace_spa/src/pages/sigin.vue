
<script setup>
import {ref, onBeforeMount} from 'vue'
import { useRouter} from "vue-router";
import Apicf from './../../api-server.conf.mjs'
import Email from './component_s/email.vue'
import Passw from './component_s/passw.vue'

const email_ref = ref(null)
const passw_ref = ref(null)
const app_route = useRouter();

onBeforeMount(async ()=> {
    let login_token = window.localStorage.getItem('gpl_lgToken');
    let account_sts = window.localStorage.getItem('gpl_isPendg')
    
    if (account_sts) return app_route.push('/created');
        
    if (login_token != null) {
        const body = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({
                user_token: login_token || ''
            })
        }
        try {
            const resp = await fetch(Apicf.API_URL+'/check-token',body)
            console.log('virify-token: '+resp.status)
            if (resp.status == 200 )
                return app_route.push('/home')
            window.login_token.removeItem('gpl_lgToken')
            return
        }
        catch(e){}
    }
});


const sigin = async ()=> {
    let diagnostic = document.getElementById('diagnostics')
    if (!email_ref.value.status || 
        !passw_ref.value.status ) {
            
        diagnostic.style.opacity = 1;
        diagnostic.innerText = 'Há campos inválidos'
        setTimeout(()=>{
            diagnostic.style.opacity = 0;
        },2000)
        return;
    }

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
        if (res.status == 200 ) { 
            window.localStorage.setItem('gpl_isPendg','ok')
            app_route.push('/created')
            return
        
        }else if (res.status == 409) {
            diagnostic.style.opacity = 1;
            diagnostic.innerText = 'Esse email já foi cadastrado'
            setTimeout(()=>{
                diagnostic.style.opacity = 0
            },2000);
            return
        }
    
        diagnostic.style.opacity = 1;
        diagnostic.innerText = 'Erro no Servidor, tente outra hora'
        setTimeout(()=>{
            diagnostic.style.opacity = 0
        },2000);
        return
    
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
   <div id="sigin-page">
    <main>
        <img src="/res/geoplace_icon.png" alt="geoplace image logo"/>
        <div id='diagnostics'>Messagens aki</div>
        <Email ref='email_ref'/>
        <Passw ref='passw_ref'/>
        <button id='bnt-sigin' @click='sigin'>Criar conta</button>
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
    height: 70vh;
}                   

main{width: 70%;}

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

#bnt-sigin {
    display: block;
    background-color: var(--gren-color);
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
