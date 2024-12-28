
<script setup>
    import { onBeforeMount } from "vue";
    import {useRouter} from "vue-router";
    import API_CONFIGS from './../../api.config.mjs';
    import sha1 from "sha1";

    const router = useRouter();

    onBeforeMount(()=> {
        let token = window.localStorage.getItem('geoplaceToken');
        if ( token ) {
            // validar antes de redirecionar
            console.log('possue um token de login')
            router.push('/geoplace_')
        }
    })

    const login = async ()=> {
        let api_url = `http://${API_CONFIGS.API_HOST}:${API_CONFIGS.API_PORT}/login`;
        let email_el = document.getElementById('usr-email');
        let passw_el = document.getElementById('usr-passw');
        let error_el = document.getElementById('error-msg');

        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_mail: email_el.value,
                user_pass: sha1(passw_el.value)
            })
        });

        if ( response.ok ) {
            let result = await response.json();
            if (result.code == 100 || result.code == 101 ) {
                error_el.style.opacity = '1';
                error_el.innerText = "Email ou Senha São Inválidos";
                setTimeout(()=>{error_el.style.opacity = 0},3000)
                email_el.focus()
            }

            if (result.code == 200 ) {
                window.localStorage.setItem('geoplaceToken',JSON.stringify(result));
                router.push('/geoplace_')
            }
        }
    }


    const showPws = ()=>{
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
        height: 100vh;
    }
    main { width: 80%;}

    img {
        display: block;
        width: 33vw;
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
        padding: 6px;
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
            background-color: #d5d5d5;
            display: block;
            font: normal .9rem/1 "Manjari";
            width: 100%;
            padding: 4% 1%;
            margin-top: 5px;
        }

        #passw-box input[type='password'], #passw-box input[type='text'] {
            border: 1px solid #c4c4c4;
            background-color: #d5d5d5;
            display: block;
            font: normal .9rem/1 "Manjari";
            width: 100%;
            padding: 4% 1%;
            margin-top: 5px;
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
    
    #bnt-login {
        display: block;
        background-color: var(--gren-color);
        width: 100%;
        padding: 3%;
        text-align: center;
        margin: 40px auto 2% auto;
        color: var(--whit-color);
        font: bolder 1rem/1 "Manjari";
        cursor: pointer;
    }
           
</style>