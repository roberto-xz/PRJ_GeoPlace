<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <div id="email-component">
        <label for="email-inp">Digite seu email</label>
        <div id="email-box">
            <input id="email-inp" type="email" placeholder="Type email"/>
            <i id='email-ico' class='material-icons'>&#xe0be;</i>
        </div>
        <p id="email-msg">Digite um email valido</p>
    </div>
</body>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    #email-component {
        width: 300px;
        margin: 0;
        padding: 0;
       /* outline: 1px solid red;*/
        margin: 10% auto;
    }
        label {
            display: block;
            font: normal 1rem/1 "AppFont", Sans-serif;
            margin-bottom: 9px;
        }
        
        #email-box {
            display: flex;
            width: 100%;
            border: 2px solid #c4c4c4;
            align-items: center;
            justify-content: space-between;
        }
            #email-inp {
                display: block;
                width: 80%;
                padding: 15px 5px;
                border: none;
                outline: none;
                background: none;
                font: normal 1rem/1 "AppFont", Sans-serif;
            }
            
            #email-ico {
                padding: 0 10px; 
                color: dimgray;
            }
            
        #email-msg {
            display: block;
            width: 100%;
            padding: 5px 0;
            transition: .6s;
            opacity: 0;
            font: 400 .8rem/1 "AppFont", Sans-serif;
            color: palevioletred;
        }
    </style>
    
    
    <script>
        var isValid = false;
        
        const isValidEmail = ()=> {
            let email = document.getElementById('email-inp').value;
            let embox = document.getElementById('email-box');
            let eicon = document.getElementById('email-ico');
            let emmsg = document.getElementById('email-msg');
            
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (regex.test(email) == false) {
                embox.style.borderColor = "palevioletred";
                eicon.style.color ='palevioletred'
                eicon.innerHTML = '&#xe000;';
                emmsg.style.opacity = 1;
                emmsg.style.transition = '.6s';
                isValid = false;
                return
            }
            
            embox.style.borderColor = "seagreen";
            eicon.style.color = 'seagreen';
            eicon.innerHTML = '&#xe0be;';
            emmsg.style.opacity = 0;
            emmsg.style.transition = '.6s';
            isValid = true;
        }
        
        document.getElementById('email-inp').addEventListener("keyup",isValidEmail)

    </script>
</html>
