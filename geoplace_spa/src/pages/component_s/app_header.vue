
<script setup>
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});
</script>

<template>
    <header id='header-component'>
    <main>
        <img src="/res/geoplace.svg" alt="geoplace image logo"/>
        <input type='url' placeholder="Pesquisar, Estado, Cidade, Rua"/>
        <button id="filtros-button">Filtros</button>
        
        <!-- Menu Hamburger para mobile -->
        <button id="menu-toggle" aria-label="Abrir menu">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- Menu de navegação -->
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

#header-component main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

#header-component img {
    height: 40px;
}

#header-component input {
    flex: 1;
    margin: 0 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#header-component #filtros-button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#header-component #menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
}

#header-component #menu-toggle span {
    width: 100%;
    height: 3px;
    background-color: #333;
}

#header-component #menu {
    display: flex;
    gap: 10px;
}

#header-component #menu button {
    padding: 8px 12px;
    background-color: transparent;
    border: 1px solid #007bff;
    color: #007bff;
    border-radius: 4px;
    cursor: pointer;
}

#header-component #menu button:hover {
    background-color: #007bff;
    color: white;
}

@media (max-width: 768px) {
    #header-component #menu-toggle {
        display: flex;
    }

    #header-component #menu {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 10px;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    #header-component #menu.active {
        display: flex;
    }
}

</style>
