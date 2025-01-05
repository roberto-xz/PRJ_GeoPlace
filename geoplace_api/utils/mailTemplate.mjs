

export const mailTemplace = (from, to, token)=>{
    return {
        from,to,
        subject: "Geoplace (Ativar conta)",
        // html:`<p> click <a hre='http://geoplace.com/active?tk=${token}'>Aqui</a> Para ativar sua conta</p>`,
        text: `acesse o link para validar sua conta: http://geoplace.com/active?tk=${token}`
    }
}