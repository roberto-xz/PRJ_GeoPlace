

<template>
    <div id="valid-page">
        <header>
            <img src="/res/logo.png" alt="geoplace image logo"/>
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

<style scoped>
    #valid-page {
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
            margin-bottom: 30px;
        }

    #page-form {
        display: block;
        width: 100%;
    }

        h2, div span {
            display: block;
            width: 100%;
            color: #000;
            font: bolder 1rem/1 "Manjari";
            text-align: center;
        }
        
        div span {font-weight: 500; color:#919191; margin-top: 8px;}
        #codes {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 20px;
        }
            #codes input {
                display: block;
                width: 50px;
                border: none;
                background-color: #cecece;
                padding: 12px;
                margin: 10px;
                text-align: center;
                font: bolder 1rem/1 "Manjari";
            }

        p {
            display: block;
            width: 100%;
            text-align: center;
            color:#919191;
            margin-top: 10px;
            font: 500 1rem/1 "Manjari";
        }
            p i {
                font-weight: bolder;
                font-style: normal;
            }
        #bnt-valid {
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