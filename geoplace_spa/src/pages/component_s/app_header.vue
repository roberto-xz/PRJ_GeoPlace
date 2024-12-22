
<template>
    <header id="app-header">
        <div id="div-a">
            <img src='/res/rmenu.svg' id="rmenu-icon" alt='' @click="$emit('click-rmenu')"/>
            <h1>Página inicial</h1>
        </div>
        <div id="search-box">
            <input type="url" placeholder="Procurar, Estado, cidade rua"/>
            <img src='/res/lupe.svg' id="lupesc-ic" alt='' @click="$emit('click-lupe')"/>
            <img src='/res/filter.svg' id="filter-ic" alt='' @click="$emit('click-filt')"/>
        </div>
    </header>
</template>

<style scoped>
    header {
        display: block;
        width: 100%;
        background-color: #ffffff;
        border-bottom: 1px solid #000;
        padding: 0 3%;
        padding-bottom: 10px;
        padding-top: 10px;
    }
        #div-a {
            display: grid;
            grid-template-columns: 20% 80%;
        }

        #rmenu-icon { display: block; width: 45%; cursor: pointer;}
        #div-a h1 {
            vertical-align: middle;
            width: 70%;
            text-align: center;
            font: bolder 1rem/3 "Manjari";
        }

        #search-box {
            display: grid;
            width: 100%;
            align-items: center;
            padding-bottom: 5px;
            grid-template-columns: 80% 10% 10%;
        }

        input[type='url'] {
            display: block;
            width: 100%;
            border: 2px solid #000;
            padding: 3% 2%;
            font: 900 .9rem/1 "Manjari";
            color: #313131;
            outline: #000;
        }

        #search-box img {
            display: block;
            width: 33px;
            margin: auto auto;
            cursor: pointer;
        }
</style>