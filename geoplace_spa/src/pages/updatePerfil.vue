
<template>
    <div id="update-perfil-page">
        <header>
            <img src="/res/GenericProfile.jpg" alt=''/>
            <span>Mudar foto</span>
        </header>
        
        <form>
            <label> Nome completo <input type='text' alt='User name'/></label>
            <div id='t2-colls'>
                 <label> Nome de usuário <input type='text' alt='User name'/></label>
                 <label> CPF (sem pontuação) <input type='text' alt='12312302332'/></label>
            </div>
            <label>
                Número para contato
                <input type='text' alt='+XX (xx) X.xxxx-xxxx'/>
            </label>
             <label>
                Email para contato
                <input type='text' alt='cicrano@email.com'/>
            </label>
            <div id="t3-colls">
                 <label> Cidade onde Reside <input type='text' alt='User name'/></label>
                 <label> Estado (UF) <input type='text' alt='12312302332'/></label>
            </div>
            <label id="label-checkbox">
                <input id="location-permission" type='checkbox'> 
                Permitir que salve minha localização
            </label>
            <button id='update-bnt'>Atualizar</button>
            <button id="delete-bnt">Excluir conta</button>
        </form>
    </div>
</template>


<style scoped>
    #update-perfil-page {width: 100%;}
    header {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px;
    }
        header img {
            display: block;
            width: 90px;
            height: 90px;
            border-radius: 100%;
        }
        header span {
            display: block;
            width: 100%;
            text-align: center;
            padding: 2% 0;
            font: bolder 1rem/1 "Manjari";
        }
    form {
        padding: 0 5%;
    }
    form label {
        display: block;
        width: 100%;
        color: gray;
        font: bolder 1rem/1 "Manjari";
        margin: 3% auto;
    }
        label input {
            display: block;
            width: 100%;
            border: 1px solid #000;
            font: bolder 1rem/1 "Manjari";
            padding: 12px;
            color: #000;
        }
    #t2-colls, #t3-colls {
        display: grid;
        align-items: center;
        grid-template-columns: 49% 49%;
        justify-content: space-between;
    }

    #t3-colls {
        grid-template-columns: 73% 25%;
    }
    #location-permission {
        display: inline;
        width: 30px;
        vertical-align: middle;
        margin: 0;
    }
    #label-checkbox {
        text-align: left;
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #update-bnt, #delete-bnt {
        display: block;
        background-color: #3D677A;
        border: 1px solid #3D677A;
        width: 100%;
        padding: 4%;
        margin: 10% auto 0 auto;
        color: var(--whit-color);
        font: bolder 1rem/1 "Manjari";
        cursor: pointer;
    }

    #delete-bnt {
        background-color: #aa5151;
        border: 1px solid #aa5151;
        margin: 1% auto 0 auto;
    }
</style>