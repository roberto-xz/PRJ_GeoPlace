
<script setup>
</script>

<template>
<div id="cards-box">
    <div class="card" v-for="x in 1" v-bind:key='x' @click="$emit('open-card',x)">
        <h1>Título do anuncio, um pouco grande {{x}}</h1>
        <img src='/res/noImageAvailiable.webp' alt=""/>
        <ul>
            <li>170.000,00 R$</li>
            <li>Remover</li>
            <li>Cabrobó-PE</li>
        </ul>
    </div>
</div>
</template>

<style scoped>
    #cards-box {
        display: block;
        width: 94%;
        height: 80vh;
        overflow: auto;
        margin: 0 auto;
        padding: 5px 0;
    }
    .card {
        overflow: hidden;
        width: 450px;
        height: 422px;
        margin: auto auto;
        margin-bottom: 40px;    
    }
        h1 {
            width: 100%;
            font: bolder 1rem/1 "Manjari";
            padding: 10px 0;
        }

        img {
            width: 100%;
            height: 75%;
        }
        ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-content: center;
            list-style: none;
            font: bolder 1rem/1 "Manjari";
        }
            ul li img {
                vertical-align: middle;
                width: 32px;
                height: auto;
            }
        p {
            display: block;
            width: 100%;
            font: bolder 1rem/1 "Manjari";
            margin: 10px 0px;
            padding-bottom: 3px;
            border-bottom: 1px solid #000;
        }

        p span {
            float: right;
        }
</style>