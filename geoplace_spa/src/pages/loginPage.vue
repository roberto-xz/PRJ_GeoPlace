
<script setup>
</script>

<template>
    <div id="login-page">
        <img src="/res/logo.png" alt="geoplace logo image"/>
        <label> Email <input id="email" type="email" placeholder="Senha123"/></label>
        <label> Senha
            <div>
                <input id="pass" type="password" placeholder="Senha123"/>
                <img class='inp-ic' src='/res/ic_002.svg' alt=''/>
            </div>
        </label>
        <a id="recovery">Recuperar Conta</a>
        <label><input type="checkbox"> Permanecer conectado?</label>
        <button>Entrar</button>
        <p> Não tem uma conta?, <a>Criar</a> </p>
    </div>
</template>

<style scoped>
    #login-page {
        display: block;
        width: 90vw;
        height: 40vh;
        background-color: #f0f8ff;
        /* background-color: red; */
    }

    div > img {
        display: block;
        width: 150px;
        margin: 0 auto;
        margin-bottom: 10%;;
    }

    label {
        display: block;
        width: 90%;
        margin: 5% auto;
        color: #000;
        font: normal 1rem/1 Sans-serif;
    }

    input[type="email"] {
        display: block;
        width: 100%;
        padding: 4%;
        border-radius: 5px;
        margin-top: 10px;
        border: 1px solid var( --dgra-color);
        background-image: url('/res/email.svg');
        background-repeat: no-repeat;
        background-position: 95% 50%;
        outline-color: var(--blue-color);
        font: normal 1rem/1 Sans-serif;
        background-color: #fff;
    }

    label > div {
        margin-top: 10px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 5px;
        border: 1px solid var( --dgra-color);
        background-color: #fff;
    }

    label > div:hover {
        border: 2.5px solid var(--blue-color);
    }

    input[type="password"] {
        display: block;
        width: 84%;
        padding: 4%;
        border: none;
        background: none;
        outline: none;
    }

    label > div > img {
        display: block;
        width: 7%;
        margin: auto auto;
    }
    #recovery {
        display: block;
        width: 90%;
        margin: 0 auto;
        text-align: right;
        color: var(--blue-color);
        font: normal 1rem/1 Sans-serif;
    }
</style>