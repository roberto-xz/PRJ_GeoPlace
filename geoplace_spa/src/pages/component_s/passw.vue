    
<script setup>
    import {ref}  from 'vue'
    import sha1 from 'sha1'

    let status = ref(false);
    let passwd  = ref('')

    const showHiddenPw = ()=> {
        let shild = document.getElementById('passw-inp');
        let type = shild.type;
        shild.type = (type == 'password') ? 'text' : 'password';
    } 
        
    const isValidPassw = ()=> {
        let pass_ = document.getElementById('passw-inp').value;
        let embox = document.getElementById('passw-box');
        let eicon = document.getElementById('passw-ico');
        let emmsg = document.getElementById('passw-msg');
        let regex = /^(?=(.*[@#$%&]))[A-Za-z0-9@#$%&]{8,}$/;
            
        if (regex.test(pass_) == false) {
            embox.style.borderColor = "palevioletred";
            eicon.style.color ='palevioletred'
            eicon.innerHTML = '&#xe000;';
            emmsg.style.opacity = 1;
            emmsg.style.transition = '.6s';
            status.value = false;
            passwd.value  = '';
            return
        }
            
        embox.style.borderColor = "seagreen";
        eicon.style.color = 'seagreen';
        eicon.innerHTML = '&#xe0da;';
        emmsg.style.opacity = 0;
        emmsg.style.transition = '.6s';
        status.value = true;
        passwd.value = sha1(pass_);
    }

    defineExpose({status,passwd})
</script>

<template>
    <div id="passw-component">
        <label for="passw-inp">Digite sua senha</label>
        <div id="passw-box">
            <input id="passw-inp" type="password" placeholder="type password"
            @keyup='isValidPassw'
            />
            <i id='passw-ico' class='material-icons'>&#xe0da;</i>
        </div>
        <label id="passw-shw">
            <input type="checkbox" id="passw-chk" @click='showHiddenPw'/>
            <span>show password</span>
            <p id="passw-msg">Digite uma senha valida</p>
        </label>
    </div>
</template>

<style scoped>
    
    
#passw-component {
    width: 100%;
    margin: 0;
    padding: 0;
}

label {
    display: block;
    font: normal 1rem/1 "AppFont", Sans-serif;
    margin-bottom: 9px;
}
        
#passw-box {
    display: flex;
    width: 100%;
    border: 2px solid #000;
    align-items: center;
    justify-content: space-between;
}

#passw-inp {
    display: block;
    width: 80%;
    padding: 17px 5px;
    border: none;
    outline: none;
    background: none;
    font: normal 1rem/1 "AppFont", Sans-serif;
}
            
#passw-ico {
    padding: 0 10px; 
    color: dimgray;
}
#passw-shw {
    display: flex;
    margin-bottom: 4px;
    margin-top: 10px;
}

#passw-chk { 
    vertical-align: middle;
}

#passw-shw span {
    width: 50%;
    font: normal 1rem/1 "AppFont", Sans-serif;
    margin-left: 6px;
    cursor: pointer;
    padding: 5px 0;
}

#passw-msg {
    padding: 5px 0;
    display: block;
    width: 100%;
    transition: .6s;
    opacity: 0;
    font: 400 .8rem/1 "AppFont", Sans-serif;
    color: palevioletred;
    text-align: right;
}
</style>
