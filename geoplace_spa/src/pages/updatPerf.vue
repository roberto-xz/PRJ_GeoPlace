
<template>
    <div id="valid-page">
        <header>
            <img src="/res/simple_logo_1.svg" alt="geoplace image logo"/>
            <h1>Validação de email</h1>
        </header>
        <div id="page-form">
            <h2>Digite o código enviado para o email</h2>
            <span>*****-lano@gmail.com</span>
            <div id="codes">
                <input class="code_item" maxlength="1"/> <input class="code_item" maxlength="1"/>
                <input class="code_item" maxlength="1"/> <input class="code_item" maxlength="1"/>
                <input class="code_item" maxlength="1"/> <input class="code_item" maxlength="1"/>
            </div>
            <p> reenviar código em <i>1:30 s</i></p>
            <button id="bnt-valid">Validar</button>
        </div>
    </div>
</template>