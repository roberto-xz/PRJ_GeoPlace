
<script setup>
</script>

<template>
    <header id='header-component'>
        <main>
            <img src="/res/geoplace.svg" alt="geoplace image logo"/>
            <input type='url' placeholder="Pesquisar, Estado, Cidade, Rua"/>
            <button>Filtros</button>
            <nav id='menu'>
                <button>Salvos</button>
                <button>Meus anúncios</button>
                <button>Criar anúncio</button>
                <button>Perfil</button>
                <button>Sair</button>
            </nav>
        </main>
    </header>
</template>

<style scoped>
#header-component {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 100vw;
    padding: 4px 0;
    border-bottom: 1px solid #000;
    background-color: #f3f3f3;
}

main{
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    width: 90%;
    height: 100%;
}

main img {
    display: block;
    width: 120px;
}
input[type='url'] {
    font: bolder 1rem/1 "Manjari";
    display: block;
    background-color: #f3f3f3;
    border: 1px solid #000;
    outline: none;
    padding: 10px 10px;
    margin: 0 20px 0 30px;
    width: min(700px, 80%);
}


</style>
