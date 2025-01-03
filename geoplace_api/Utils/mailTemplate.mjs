

export const mailTemplace = (from, to, token)=>{
    return {
        from,to,
        subject: "Geoplace (Codigo de Validação)",
        html:`<p> click <a hre='http://geoplace.com/active?tk=${token}'>Aqui</a> Para ativar sua conta</p>`,
        text: `link de validação: http://geoplace.com/active?tk=${token}`
    }
}