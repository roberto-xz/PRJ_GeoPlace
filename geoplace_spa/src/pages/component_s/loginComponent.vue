<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
    <div id="email-component">
        <label for="email-inp">Digite sua senha</label>
        <div id="email-box">
            <input id="email-inp" type="password" placeholder="type password"/>
            <i id='email-ico' class='material-icons'>&#xe0da;</i>
        </div>
        <label id="passw-shw">
            <input type="checkbox" id="passw-chk"/>
            <span>show password</span>
        </label>
        <p id="email-msg">Digite uma senha valida</p>
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
        #passw-shw {
            margin-bottom: 4px;
            margin-top: 4px;
        }
            #passw-chk { vertical-align: middle;}
                #passw-chk span {
                    font: normal 1rem/1 "AppFont", Sans-serif;
                }

        #email-msg {
            display: block;
            width: 100%;
            padding: 5px 0;
            transition: .6s;
            opacity: 0;
            font: 400 .8rem/1 "AppFont", Sans-serif;
            color: palevioletred;
            text-align: right;

        }
    </style>
    
    
    <script>
        var isValid = false;
        
        const showHiddenPw = ()=> {
            let email = document.getElementById('email-inp');
            let type = email.type;
            email.type = (type == 'password') ? 'text' : 'password';
        } 
        
        const isValidEmail = ()=> {
            let email = document.getElementById('email-inp').value;
            let embox = document.getElementById('email-box');
            let eicon = document.getElementById('email-ico');
            let emmsg = document.getElementById('email-msg');
            let regex = /^(?=(.*[0-9]))(?=(.*[@#$%&]))(?=(.*[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]))[A-Za-z0-9@#$%&]{8,}$/;
            //let regex = /^(?=(.*[@#$%&]))[A-Za-z0-9@#$%&]{8,}$/;
            
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
            eicon.innerHTML = '&#xe0da;';
            emmsg.style.opacity = 0;
            emmsg.style.transition = '.6s';
            isValid = true;
        }
        
        
        document.getElementById('email-inp').addEventListener("keyup",isValidEmail)
        document.getElementById('passw-chk').addEventListener("click",showHiddenPw)

    </script>
</html>
