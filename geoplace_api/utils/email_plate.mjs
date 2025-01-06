
import 'dotenv/config'

export default (send_to, secret_code) =>{
    const html =`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ative sua conta - GeoPlace</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <h1 style="text-align: center; color: #4CAF50;">Bem-vindo ao GeoPlace! 🏡</h1>
                <p>Estamos muito felizes por você ter se cadastrado no <strong>GeoPlace</strong>! Aqui, ajudamos você a explorar as melhores oportunidades de <strong>aluguel</strong> e <strong>compra de imóveis</strong> para transformar seus planos em realidade.</p>
                <p>Agora só falta um pequeno passo para liberar todas as vantagens da sua conta. Clique no botão abaixo para ativar e começar sua jornada com o GeoPlace:</p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${process.env.front_url}${secret_code}" style="background-color: #4CAF50; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-size: 16px;">Ativar Minha Conta</a>
                </div>
                <p>Com sua conta ativada, você terá acesso a:</p>
                <ul style="list-style: none; padding: 0;">
                    <li>✅ Imóveis exclusivos para aluguel e venda em sua região.</li>
                    <li>✅ Ferramentas para comparar opções e encontrar o imóvel perfeito.</li>
                    <li>✅ Contato direto com proprietários e corretores confiáveis.</li>
                    <li>✅ Experiência personalizada para atender às suas necessidades.</li>
                </ul>
                <p>Se você não solicitou esta conta, fique tranquilo, basta ignorar esta mensagem.</p>
                <p>Agradecemos por escolher o <strong>GeoPlace</strong> para encontrar seu próximo imóvel. Estamos aqui para ajudar em cada passo do caminho!</p>
                <p style="text-align: center; margin-top: 20px;">📧 Precisa de ajuda? Fale com a gente: <a href="mailto:${process.env.email_user}" style="color: #4CAF50;">${process.env.email_user}</a></p>
                <p style="text-align: center; color: #888; font-size: 12px;">Equipe GeoPlace</p>
            </div>
        </body>
        </html>`;

    return {
        from: process.env.geoplace_mail, //.email_serv,
        to  : send_to,
        subject: "Ative sua conta no GeoPlace e encontre o imóvel dos seus sonhos!",
        text: `
            Estamos muito felizes por você ter se cadastrado no GeoPlace! 
            Aqui, ajudamos você a explorar as melhores oportunidades de aluguel
            e compra de imóveis para transformar seus planos em realidade.

            Agora só falta um pequeno passo para liberar todas as vantagens da sua conta. 
            Clique no link abaixo para ativar e começar sua jornada com o GeoPlace:

            ${process.env.front_url}${secret_code}

            Com sua conta ativada, você terá acesso a:
                ✅ Imóveis exclusivos para aluguel e venda em sua região.
                ✅ Ferramentas para comparar opções e encontrar o imóvel perfeito.
                ✅ Contato direto com proprietários e corretores confiáveis.
                ✅ Experiência personalizada para atender às suas necessidades.

            Se você não solicitou esta conta, fique tranquilo, 
            basta ignorar esta mensagem.

            Agradecemos por escolher o GeoPlace para encontrar seu próximo imóvel. 
            Estamos aqui para ajudar em cada passo do caminho!

            Até breve,
            Equipe GeoPlace

            📧 Precisa de ajuda? Fale com a gente: [${process.env.email_user}]
        `,
        html: html
    }
}