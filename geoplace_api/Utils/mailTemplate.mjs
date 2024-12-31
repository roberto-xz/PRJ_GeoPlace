

export const mailTemplace = (from, to, magicCode)=>{
    return {
        from,to,
        subject: "Geoplace (Codigo de Validação)",
        // html:'',
        text: `Seu código de validação: ${magicCode}`
    }
}