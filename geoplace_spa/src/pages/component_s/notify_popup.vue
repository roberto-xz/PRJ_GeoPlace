
<script setup>
    import {useRouter} from 'vue-router'
    import {onBeforeMount, watch} from 'vue'
    const root_url = '/res/'
    const app_router = useRouter();
    const emit = defineEmits(['close-popup'])

    const props = defineProps({
        attributes: Object,
    });
   
    watch(()=> props.attributes.show_loading,(state,_)=>{
        const ld = document.getElementById('container-loading');
        const dg = document.getElementById('container-diagnostics');
        
        if (state == false){
            ld.style.display = 'none'
            dg.style.display = 'flex'
        }else {
            ld.style.display = 'block';
            dg.style.display = 'none';
        }
    })

    const clicked = ()=> {
        if (props.attributes.goto == undefined )
            return emit('close-popup');
        
        app_router.push(props.attributes.goto)
        return
    }
</script>

<template>
    <div id='popup'>
        <div id='container-loading'>
            <img src='/res/loading.gif'/>
            <p>Por favor aguarde..</p>
        </div>
        <div id='container-diagnostics'>
            <img :src='root_url+attributes.icon' alt=''/>
            <i></i>
            <p id='msg'>{{attributes.message}}</p>
            <button @click='clicked'>{{attributes.button_text}}</button>
        </div>
    </div>
</template>

<style scoped>
#popup {
    position: absolute;
    left: 0; top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.6);
    z-index: 999;
}

#container-loading {
    display: block;
    width: 310px;
    height: auto;
    padding: 10px 0;
}
    #container-loading img {
        display: block;
        width: 40px;
        filter: invert(.1);
        margin: auto auto;
    }
    #container-loading p {
        display: block;
        width: 100%;
        text-align: center;
        color: #f3f3f3;
        padding: 5% 0;
        font: bolder 1rem/1 "Manjari";
    }

#container-diagnostics {
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 12px 7px 5px rgba(0,0,0,.6);
    width: 320px;
    background-color: whitesmoke;
}
    #container-diagnostics img {
        display: block;
        width: 50px;
        padding: 20px 0;
    }
    #container-diagnostics i {
        display: block;
        padding: 1px 0;
        width: 100%;
    }

    #container-diagnostics p {
        display: block;
        width: 80%;
        text-align: center;
        color: dimgray;
        padding: 5% 0;
        font: bolder .9rem/1 "Manjari";
    }


button {
    display: block;
    background-color: darkgreen;
    border: 1px solid var(--gren-color);
    width: 100%;
    padding: 5% 10px;
    text-align: center;
    color: var(--whit-color);
    font: bolder .9rem/1 "Manjari";
    margin-top: 10%;
    cursor: pointer;
}

</style>
