
<script setup>
    import {useRouter} from "vue-router"
    const router = useRouter();

    const show_password = ()=>{
        let pass_input = document.getElementById("password");
        let change_elm = document.getElementById("show-pw");
        
        if (pass_input.type == 'password'){
            pass_input.type = 'text';
            change_elm.innerText = 'esconder'
        } else {
            pass_input.type = 'password';
            change_elm.innerText = 'mostrar'
        }
    }
</script>

<template>
    <div id="login-page">
        <img src="/res/logo.png" alt="geoplace image logo"/>
        <div id="page-form">
            <label> Email ou CPF
                <input id="email" type="email" placeholder="user.name@email.com">
            </label>

            <label> Senha
                <div id="passw">
                    <input id="password" type="password" placeholder="senha123">
                    <button id="show-pw" @click="show_password">mostrar</button>
                </div>
            </label>
            <span id="rec-link" href="">Esqueci a senha</span>
            <button @click="()=> router.push('/geoplace_')" id="bnt-login">Entrar</button>
        </div>
    </div>
</template>

<style scoped>
    #login-page {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100vw;
        height: 85vh;
    }
    img {
        display: block;
        width: 35vw;
        align-self: center;
    }

    #page-form {
        display: block;
        width: 100%;
    }

    label {
        display: block;
        width: 87%;
        margin: 4% auto;
        color: #000;
        font: normal 1rem/1 "Manjari";
    }
        #email {
            display: block;
            border: 1px solid #c4c4c4;
            background-color: #d5d5d5;
            font: normal 1rem/1 "Manjari";
            width: 100%;
            padding: 5% 4%;
            margin-top: 5px;
            outline: none;
        }

        #passw {
            display: grid;
            grid-template-columns: 75% 25%;
            border: 1px solid #c4c4c4;
            background-color: #d5d5d5;
            
            width: 100%;
            padding: 5% 4%;
            margin-top: 5px;
        }
            #password{
                font: normal 1rem/1 "Manjari";
                border: none;
                background: transparent;
                outline: none;
            }

            #show-pw {
                display: block;
                width: 100%;
                text-align: right;
                margin: auto auto;
                font: bolder .9rem/1 "Manjari";
                cursor: pointer;
                user-select: none;
                background: none;
                border: none;
                outline: none;
            }

        #rec-link {
            display: block;
            width: 87%;
            margin: 0 auto;
            text-align: right;
            font: bolder .9rem/1 "Manjari";
            text-decoration: underline;
            cursor: pointer;
        }

        #bnt-login {
            display: block;
            background-color: #3D677A;
            border: 1px solid #3D677A;
            width: 87%;
            padding: 4%;
            margin: 15% auto 0 auto;
            color: var(--whit-color);
            font: bolder 1rem/1 "Manjari";
            cursor: pointer;
        }

</style>