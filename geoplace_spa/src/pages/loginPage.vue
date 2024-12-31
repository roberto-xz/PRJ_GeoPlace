
<script setup>
    import { onBeforeMount } from "vue";
    import {useRouter} from "vue-router";
    import API_CONFIGS from './../../api.config.mjs';
    import sha1 from "sha1";
    const api_url = `http://${API_CONFIGS.API_HOST}:${API_CONFIGS.API_PORT}`;
    const router = useRouter();

    onBeforeMount(async ()=> {
        // verifica se há dados de sessão para validar o token, antes
        // de redirecionar ou renderizar a página.
        let app_token = window.localStorage.getItem('geoplaceToken');
        if ( app_token ) {
            const response = await fetch(api_url+'/valid',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({user_token: app_token})
            });
            // servidor respondeu
            if (response.ok) {
                let result = await response.json();
                if (result.code == 200) 
                    return router.push('/geoplace_');
                
                // token inválido, remove o token e continua nessa página
                window.localStorage.removeItem('geoplaceToken');
                return;
            }
            // tem um token mas não foi validado (API offline)
            // redirecionar para 404? (página 404, ainda não existe)
        }
    })

    const login = async ()=> {
        let email_el = document.getElementById('usr-email');
        let passw_el = document.getElementById('usr-passw');
        let error_el = document.getElementById('error-msg');
        let lgbnt_el = document.getElementById('bnt-login');
        let response = undefined;
        
        lgbnt_el.disabled = true;
        lgbnt_el.id = 'bnt-login-disabled';
        
        try { // tenta uma conexão com a API
            response = await fetch(api_url+'/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    user_mail: email_el.value,
                    user_pass: sha1(passw_el.value)
                })
            });
        }catch(e){
            error_el.style.opacity = 1;
            error_el.innerText = 'Internal error, offline server'
            setTimeout(()=>{error_el.style.opacity = 0;},3000)
            lgbnt_el.disabled = false;
            lgbnt_el.id = 'bnt-login';
            return;
        }

        if ( response.ok ) {
            let result = await response.json();
            if (result.code == 100 || result.code == 101 ) {
                error_el.style.opacity = '1';
                error_el.innerText = "Email ou Senha São Inválidos";
                setTimeout(()=>{error_el.style.opacity = 0},3000)
                email_el.focus()
                lgbnt_el.disabled = false;
                lgbnt_el.id = 'bnt-login';
            }

            if (result.code == 200 ) {
                window.localStorage.setItem('geoplaceToken',result.user_token);
                lgbnt_el.disabled = false;
                lgbnt_el.id = 'bnt-login';
                router.push('/geoplace_')
            }
        }
    }


    const showPws = ()=> {
        let pass_input = document.getElementById("usr-passw");
        pass_input.type = (pass_input.type == 'password') ? 'text' : 'password';
    }
</script>

<template>
    <div id="login-page">
    <main>
        <img src="/res/logo.png" alt="geoplace image logo"/>
        <div id='error-msg'>Messagens aki</div>
        <label id='email-box'> 
            Email ou CPF
            <input id="usr-email" type="email" placeholder="user.name@email.com">
        </label>

        <label id='passw-box'> 
            Senha
            <input id="usr-passw" type="password" placeholder="senha123">
        </label>
        <div id='coll_2_-box'>
            <label id='show-pbox'>
                <input type='checkbox' @change='showPws()'> Mostrar Senha
            </label>
            <p id="rec-link" href="">Esqueci a senha</p>
        </div>
        <button @click="login()" id="bnt-login">Entrar</button>
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
        height: 90vh;
    }
    main { 
        width: 90%;
    }

    img {
        display: block;
        width: 150px;
        margin: 0 auto;
        margin-bottom: 10px;
        align-self: center;
    }
    #error-msg {
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

    #email-box, #passw-box{
        display: block;
        font: normal .9rem/1 "Manjari";
        width: 100%;
        margin-top: 20px;
        outline: none;
    }
        #email-box input[type='email'] {
            border: 1px solid #c4c4c4;
            background-color: #e8e7e7;
            display: block;
            font: normal .9rem/1 "Manjari";
            width: 100%;
            padding: 5% 1%;
            margin-top: 5px;
            outline-color: #3D677A;
        }

        #passw-box input[type='password'], #passw-box input[type='text'] {
            border: 1px solid #c4c4c4;
            background-color: #e8e7e7;
            display: block;
            font: normal .9rem/1 "Manjari";
            width: 100%;
            padding: 5% 1%;
            margin-top: 5px;
            outline-color: #3D677A;
        }

    #coll_2_-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font: bolder .8rem/1 "Manjari";
        margin-top: 8px;
    }
        #show-pbox,#rec-link {cursor: pointer; user-select: none;}
        input[type='checkbox'] {
            vertical-align: middle;
        }
        #rec-link {
            text-decoration: underline;
            color: blue;
        }
    #bnt-login {
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

    #bnt-login-disabled {
        display: block;
        background-color: #70a573;
        border: 1px solid  #70a573;
        width: 100%;
        padding: 4% 10px;
        text-align: center;
        margin: 40px auto 2% auto;
        color: transparent;
        font: bolder 1rem/1 "Manjari";
        cursor: pointer;
        background-image: url('/res/loading.gif');
        background-size: 6%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }
           
</style>