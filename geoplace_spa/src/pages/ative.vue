
<script setup>
    import { onMounted } from "vue";
    import { useRoute, useRouter } from 'vue-router'
    import Apicf from './../../api-server.conf.mjs'
    const app_router = useRouter()
    const app_querie =  useRoute()
    
    
    onMounted(async ()=>{
        const sucsess = document.getElementById('sucsess')
        const expired = document.getElementById('expired')
        const scode = app_querie.params.scode;
        try {/*
           const body = {
                method: 'PUT',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify({
                    gp_scode: scode || ''
                })
            }
            const res = await fetch(Apicf.API_URL+'/ative',body);
            */
            if (true){ 
                sucsess.style.display = 'block'; 
                window.localStorage.removeItem('gpl_isPendg')
                return
            }
            if (false) { 
                
                expired.style.display = 'block'; return
            }
            //app_router.push('/pageNotFoun')
        }catch(e){app_router.push('/pageNotFoun')}
    });
</script>

<template>
    <main id='ative-page'>
        <div id="sucsess">
            <header>
                <i class='material-icons'>&#xe86c;</i>
                <h1> Sua conta foi Ativada com <br>Sucesso!</h1>
            </header>
            <p> 
                Agora você pode aproveitar todas as vantagens 
                que o geoplace tem a oferecer!
            </p>
            <button 
                id='bnt-to-app'>Entrar
            </button>
        </div>
         <div id="expired">
            <header> 
                <i class='material-icons'>&#xe426;</i>
                <h1>Link Expirado</h1>
            </header>
            <p> 
                Por favor! peça um novo link 
                para continuar com a ativação da sua conta
            </p>
            <button>Pedir Novo Link</button>
        </div>
        
    </main>
</template>

<style scoped>

#ative-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 80vh;
}
#sucsess {display: none;}
#expired, #sucsess {
    display: block;
    width: 75%;
    height: 50%;
    display: none;
}

header {
    display: block;
    width: 100%;
}

i {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 25px;
}

h1 {
    display: block;
    text-align: center;
    font: bolder 1.4rem/1 "Manjari";
}

p {
    width: 100%;
    display: block;
    text-align: center;
    margin-top: 25px;
    color: dimgray;
    font: normal 1rem/1.5 "Manjari";
}

button {
    display: block;
    background-color: #12662bff;
    border: 1px solid #12662bff;
    width: 100%;
    padding: 4% 10px;
    margin: 40px auto 2% auto;
    color: var(--whit-color);
    font: bolder 1rem/1 "Manjari";
    cursor: pointer;
}
</style>
