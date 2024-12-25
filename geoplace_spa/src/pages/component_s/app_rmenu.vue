
<script setup>
    import {useRouter} from "vue-router"
    const router = useRouter();

    const exit = ()=>{router.push("/indexPage")}
    const toUpdatePerfil = ()=>{router.push('/updatePerfil')}
    const tofavoritesPage = ()=>{router.push('/favoritesPage')}
    const toHomePage = ()=>{router.push('/geoplace_')}
</script>

<template>
    <div id="r-menu-box" @click="$emit('close-rmenu')">
        <div id="r-menu">
            <div id="user-data-box">
                <img id="user-photo" src="/res/GenericProfile.jpg" alt="user profile photo"/>
                <p id="user-name"> User name
                    <span id="user-location">Cabrobó-PE</span>
                </p>
            </div>
            <nav id="rmenu-options">
                <ul>
                    <li><label @click="toHomePage()"><img src='/res/filter.svg' alt=''/>Home</label></li>
                    <li><label @click="tofavoritesPage()"><img src='/res/filter.svg' alt=''/>Salvos</label></li>
                    <li><label><img src='/res/filter.svg' alt=''/>Meus anúncios</label></li>
                    <li><label><img src='/res/filter.svg' alt=''/>Criar Anúncios</label></li>
                    <li><label @click="toUpdatePerfil()"><img src='/res/filter.svg' alt=''/>Minha conta</label></li>
                    <li><label><img src='/res/filter.svg' alt=''/>Sobre Nós</label></li>
                    <li><label><img src='/res/filter.svg' alt=''/>Ajuda</label></li>
                    <li><label><img src='/res/filter.svg' alt=''/>Termos de Uso</label></li>
                    <li><label @click="exit()"><img src='/res/filter.svg' alt=''/>Sair</label></li>
                </ul>
            </nav>
        </div>
    </div>    
</template>

<style scoped>
    #r-menu-box {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
    }
        #r-menu {
            display: block;
            width: 60%;
            background-color: #fff;
            height: 100%;
            z-index: 9999;
        }

        #user-data-box {
            width: 100%;
            padding: 33px 15px;
            display: flex;
            border-bottom: 1px solid #000;
            align-items: center;
        }
            #user-photo {
                display: block;
                width: 61px;
                height: 58px;
                border-radius: 100%;
                border: 1px solid #000;
            }

            #user-name {
                display: block;
                font: bolder 1rem/1 "Manjari";
                width: 100%;
                margin-left: 10px;
                margin-top: 4px;
            }
                #user-location{
                    display: block;
                    width: 100px;
                    text-align: left;
                    font: bolder .7rem/1 "Manjari";
                    margin-top: 4px;
                }
        #rmenu-options {
            display: block;
            width: 100%;
            padding: 15px;
        }

        ul{list-style: none;}
        ul li {
            display: flex;
            padding: 10px;
            cursor: pointer;
            font: bolder .9rem/1 "Manjari";
        }
        ul li img {
            width: 32px;
            height: 32px;
            vertical-align: middle;
            margin-right: 6px;
        }

</style>