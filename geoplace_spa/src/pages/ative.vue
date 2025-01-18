
<script setup>
   /*
    import { onBeforeMount } from "vue";
    import { useRoute, useRouter } from 'vue-router'
    import API_CONFIGS from './../../api.config.mjs';
    const api_url = `http://${API_CONFIGS.API_HOST}:${API_CONFIGS.API_PORT}`;
    const params = useRoute()
    const router = useRouter()

    onBeforeMount(async ()=> {
        const token = params.params.token;
        const regex = /^\d{10}$/;
        
        if (regex.test(token)) {
            const response = await fetch(api_url+'/ative',{
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify({user_token: token})
            });

            if (response.ok) {
                let result = await response.json();
                if (result.code == 200) 
                    window.localStorage.removeItem('geoplaceToken');
                else
                    router.push('/getLinkToActiveAccount');
                    return;
            }
        }
    /// 404
    })

    */
</script>

<template>
    <div id="active-page">
        <header>
            <i class='material-icons'>&#xe86c;</i>
            <h1> Sua conta foi Ativada com <br>Sucesso!</h1>
        </header>
        <p> 
            Agora você pode aproveitar todas as vantagens 
            que o geoplace <br> tem a oferecer!
        </p>
        <button 
            @click=" ()=> router.push('/loginPage')" 
            id='bnt-to-app'>Entrar
        </button>
    </div>
</template>

<style scoped>

#active-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 80vh;
}

header {
    display: block;
    width: 60%;
}

i {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 3.5rem;
    color: seagreen;
    margin-bottom: 25px;
}

h1 {
    display: block;
    text-align: center;
    font: bolder 1.4rem/1 "Manjari";
}

p {
    width: 70%;
    display: block;
    text-align: center;
    margin-top: 25px;
    color: dimgray;
    font: normal 1rem/1 "Manjari";
}

#bnt-to-app {
    display: block;
    background-color: black;
    border: 1px solid black;
    width: 70%;
    padding: 3% 10px;
    text-align: center;
    margin: 40px auto 2% auto;
    color: var(--whit-color);
    font: bolder .9rem/1 "Manjari";
    cursor: pointer;
}
</style>
