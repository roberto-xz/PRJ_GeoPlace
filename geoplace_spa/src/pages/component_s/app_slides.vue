
<script setup>
</script>

<template>
<div id="main-box">
    <div id="slide-box">
        <img src='/res/noImageAvailiable.webp'/>
        <img src='/res/noImageAvailiable.webp'/>
        <img src='/res/noImageAvailiable.webp'/>
        <img src='/res/noImageAvailiable.webp'/>
        <img src='/res/noImageAvailiable.webp'/>
        <img src='/res/noImageAvailiable.webp'/>
        <img src='/res/noImageAvailiable.webp'/>
    </div>
</div>   
</template>

<style scoped>
    #main-box {
        display: block;
        width: 100%;
        height: 295px;
        overflow: auto;
    }

    #slide-box {
        display: block;
        width: calc(352px*7);
    }

    #slide-box img {
        display: inline;
        width: 350px;
        margin: 1px;
    }
</style>