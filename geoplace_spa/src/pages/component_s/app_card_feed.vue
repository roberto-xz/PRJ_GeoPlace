
<script setup>
</script>

<template>
<div id="cards-box">
    <main>
        <div class="card" @click="$emit('open-card',12)">
            <h1>Mansão muito Xique, só pra quem pode, Se é pobre nem olhe </h1>
            <img src='/res/test_images/01.jpg' alt=""/>
            <p> preço: 1.578.000,00 R$
                <span>Cabrobó-PE</span>
            </p>
        </div>
        <div class="card" @click="$emit('open-card',12)">
            <h1>Casa 3d, Feita no blender, Comprou a casa, leva o carro </h1>
            <img src='/res/test_images/02.jpg' alt=""/>
            <p> preço: 15,00 R$
                <span>Cabrobó-PE</span>
            </p>
        </div>
        <div class="card" @click="$emit('open-card',12)">
            <h1>Casa muito boa para Físicos, A sacada mais baixa tem 7 metros </h1>
            <img src='/res/test_images/03.jpg' alt=""/>
            <p> preço: 3.000,00 R$/Més
                <span>Cabrobó-PE</span>
            </p>
        </div>
        <div class="card" @click="$emit('open-card',12)">
            <h1>Só vendo, Não troco, Dispenso curiosos, Salmos 23 </h1>
            <img src='/res/test_images/04.jpg' alt=""/>
            <p> preço: 308.000,00 R$
                <span>Cabrobó-PE</span>
            </p>
        </div>
        <div class="card" @click="$emit('open-card',12)">
            <h1>Tá em ótimo estado, o último morador, nem queria sair da casa </h1>
            <img src='/res/test_images/05.jpg' alt=""/>
            <p> preço: 230,00 R$/Més
                <span>Cabrobó-PE</span>
            </p>
        </div>
        <div class="card" @click="$emit('open-card',12)">
            <h1>Casa com piscina, ótima opção para solteiros </h1>
            <img src='/res/test_images/06.jpg' alt=""/>
            <p> preço: 120, 00 R$/ Més
                <span>Cabrobó-PE</span>
            </p>
        </div>
    </main>
</div>
</template>

<style scoped>
#cards-box {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 90vh;
    margin: 0 auto;
    padding: 5px 0;
}

main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: min(1300px, 95%);
    height: 100%;
    overflow: auto;
    scrollbar-color: darkgreen #f4f4f4;
    scrollbar-width: thin;
}

.card {
    display: block;
    margin: 30px 0;
    width: 370px;
    height: 370px;
}

h1 {
    width: 100%;
    font: 500 1.2rem/1 "Manjari";
    padding: 10px 0;
}

img {
    cursor: pointer;
    width: 100%;
    height: 75%;
    transition: .7s;
    border: 1px solid #000;
}
    img:hover {
        transform: scale(1.05);
        transition: .7s;
    }


p {
    display: block;
    width: 100%;
    font: bolder 1rem/1 "Manjari";
    margin: 10px 0px;
    padding-bottom: 3px;
    border-bottom: 1px solid #000;
}

p span {float: right;}

</style>
