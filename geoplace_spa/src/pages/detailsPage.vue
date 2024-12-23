
<script setup>
    import slidesShow from "./component_s/app_slides.vue";
</script>

<template>
<div>
    <slidesShow />
    <div id="show-options">
        <button>Imagens</button>
        <button>Vídeos</button>
        <button>Mapa</button>
        <button>Denunciar</button>
    </div>
    <h1 id='item-title'>Título do anuncio um pouco grande..</h1>
    <span id='item-price'>500,00 R$/Més</span>
    <h2>Caracteristicas</h2>
    
    <div id='item-details'>
        <div class='item-box' v-for='x in 10' v-bind:key='x'>
            <img src='/res/filter.svg'/>
            <label>Cozinha <span>3</span></label>
        </div>
    </div>

    <div id="footer-options">
        <button>Fazer oferta</button>
        <button>Salvar</button>
        <button>Compartilhar</button>
    </div>
</div>
</template>

<style scoped>
    #show-options{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #000;
        margin-top: 10px;
    }
    button {
        background: transparent;
        border: none;
        outline: none;
        font: 400 1rem/1 "Manjari";
        cursor: pointer;
    }

    #item-title, #item-price, h2{
        display: block;
        width: 100%;
        padding: 5px 10px;
        font: bolder 1.3rem/1 "Manjari";
        margin-top: 30px;
    }

    #item-price {
        font-size: 1rem;
        margin: 0;
    }

    #item-details {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        width: 97%;
        overflow: auto;
        margin: auto auto;
    }
        .item-box {
            display: grid;
            grid-template-columns: 30% 70%;
            margin: 6px 0;
        }
            .item-box img {
                width: 100%;
                vertical-align: middle;
            }

            .item-box label {
                margin: auto auto;;
                display: block;
                width: 100%;
                font: bolder 1rem/1 "Manjari";
            }

            .item-box label span {
                color: #818181;
                display: block;
            }
    #footer-options {
        width: 100%;
        padding: 10px 0;
        position: fixed;
        bottom: 0px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>