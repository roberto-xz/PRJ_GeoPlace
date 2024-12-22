
<script setup>
    import {useRouter} from 'vue-router'
    const router = useRouter();

    const toLoginPage = ()=> {router.push('/loginPage')}
    const toValidPage = ()=> {router.push('/ValidPage')}
</script>

<template>
    <div id="sigin-page">
        <header>
            <img src="/res/simple_logo_1.svg" alt="geoplace image logo"/>
            <h1>Criar conta</h1>
        </header>
        <div id="page-form">
            <label> Endereço de Email
                <input id="email" type="email" placeholder="user.name@email.com">
            </label>

            <label> Senha
                <div id="passw">
                    <input id="password" type="password" placeholder="senha123">
                    <button id="show-pw" @click="show_password">mostrar</button>
                </div>
            </label>
            <label id="user-terms"> 
                <input id="terms" type="checkbox"> le, e aceito os <button id="terms-link">termos de uso</button>
            </label>
            <button id="bnt-sigin" @click="toValidPage()">Entrar</button>
            <button id="bnt-login" @click="toLoginPage()">Já tenho uma conta</button>
        </div>
    </div>
</template>

<style scoped>
    #sigin-page {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        width: 100vw;
        height: 85vh;
    }
    img {
        display: block;
        width: 10vw;
        margin: auto auto;
        align-self: center;
    }

        h1 {
            display: block;
            width: 100%;
            text-align: center;
            font: 800 1.2rem/1 "Manjari";
            color: #3D677A;
            margin-top: 5px;
            margin-bottom: 50px;
        }

    #page-form {
        display: block;
        width: 100%;
    }

    label {
        display: block;
        width: 87%;
        margin: 6% auto;
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
        #user-terms {
            font: bolder 1rem/1 "Manjari";
            cursor: pointer;
        }
            #terms-link {
                border: none;
                background: none;
                outline: none;
                color: #3D677A;
                cursor: pointer;
                font-weight: 800;
            }
        #bnt-sigin, #bnt-login {
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

        #bnt-login {
            margin: 0 auto;
            background: none;
            border: none;
            outline: none;
            color: #919191;
            text-decoration: underline;
        }

</style>