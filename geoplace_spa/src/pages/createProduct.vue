
<template>
<div id='create-product-page'>
    <main>
        <div id='screen'>
            <div id='l-screen'>
                <h1>Adicione boas fotos</h1>
                <label class='label-image'>
                    <input type='file' placeholder="adicionar imagem"/>
                </label>
                <div id='collum-pictures'>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                    <label class='collum-image'><input type='file' placeholder="adicionar imagem"/></label>
                </div>
                <h2>Caracteristicas</h2>
                <div id='details-box'></div>
                <button id='add-details-bnt'>Adicionar</button>
            </div>

            <div id='r-screen'></div>
        </div>
    </main>
</div>
</template>

<style scoped>
#create-product-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 70vh;
}

main {
    width: min(1400px, 90%);
    height: 90%;
}


#screen {
    display: grid;
    grid-template-columns: 50% 60%
}

#l-screen {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

}
#r-screen {}

h1, h2 {
    width: 100%;
    text-align: left;
    color: #000;
    margin-bottom: 5px;
    font: bolder 1.4rem/1 "Manjari";
}

.label-image, .collum-image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: dimgray;
    flex:0 0 350px;
    height: 312px;
}


#collum-pictures {
    flex: 1;
    height: 312px;
    overflow: auto;
}
.collum-image {
    width: 260px;
    height: 220px;
    margin: 0 auto 10px auto;
}

</style>
