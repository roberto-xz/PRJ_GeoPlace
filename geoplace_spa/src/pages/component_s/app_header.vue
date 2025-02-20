
<script setup>
    import {useRouter} from 'vue-router'
    const app_router = useRouter();


</script>

<template>
    <header id='header-component'>
    <main>
        <img src="/res/geoplace.svg" alt="geoplace image logo" @click="()=> app_router.push('/home')"/>
        <input type='url' placeholder="Pesquisar, Estado, Cidade, Rua"/>
        <nav id='menu'>
             <button @click="()=> app_router.push('/home')">Home</button>
            <button @click="()=> app_router.push('/favoritesPage')">Salvos</button>
            <button @click="()=> app_router.push('/userAds')">Meus anúncios</button>
            <button @click="()=> app_router.push('/createProducts')">Criar anúncio</button>
            <button @click="()=> app_router.push('/updatePerfil')">Perfil</button>
            <button @click="()=> app_router.push('/login')">Sair</button>
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
    background-color: #121212;
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
    filter: invert(60%);
    cursor: pointer;
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
    border: 1px solid gray;
    background-color: #202020;
}

#menu {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: 500 .9rem/1.3 "Manjari";
    padding: 8px 12px;
    background-color: transparent;
    border: none;
    color: #f3f3f3;
    cursor: pointer;
}

button:hover {
    text-decoration: underline;
    color: darkgreen;
    font-weight: bolder;
}

</style>
