
<script setup>

</script>

<template>
    <header id='header-component'>
    <main>
        <img src="/res/geoplace.svg" alt="geoplace image logo"/>
        <input type='url' placeholder="Pesquisar, Estado, Cidade, Rua"/>
        <nav id='menu'>
            <button>Filtros</button>
            <button>Salvos</button>
            <button>Meus anúncios</button>
            <button>Criar anúncio</button>
            <button>Perfil</button>
        </nav>
    </main>
 </header>
</template>

<style scoped>
#header-component {
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    width: 100vw;
    box-shadow: 1px 2px 3px #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
    padding: 5px 0;
}

main {
    display: flex;
    width: 80%;
    margin: 0 auto;
}

img {
    margin: 0 10px;
    display: block;
    width: 6%;
}

input[type='url'] {
    width: 50%;
    background-image: url('/res/lupe.svg');
    background-size: 20px;
    background-position: 1% 50%;
    background-repeat: no-repeat;
    margin: 0 10px;
    font: normal .9rem/1.3 "Manjari";
    padding: 10px;
    outline: none;
    padding-left: 40px;
    border: 1px solid #ccc;
}

#menu {}

button {
    font: 500 .9rem/1.3 "Manjari";
    padding: 8px 12px;
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
}

button:hover {
    text-decoration: underline;
    color: darkgreen;
    font-weight: bolder;
}

</style>
