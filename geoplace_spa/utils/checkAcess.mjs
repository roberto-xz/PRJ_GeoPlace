
import Apicf from '../apiconfig.mjs'

export default async (app_route)=> {
    let login_token = window.localStorage.getItem('gpl_lgToken');
    let account_sts = window.localStorage.getItem('gpl_isPendg')
    
    if (account_sts) {
        console.log('há um conta pendente, redirecioando');
        app_route.push('/created');
        return ''
    }
    if (login_token != null) {
        console.log('há um token de sessão, tentando validar');
        const body = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({
                user_token: login_token || ''
            })
        }
        try {
            const resp = await fetch(Apicf.API_URL+'/check-token',body)
            if (resp.status == 200 ) {
                console.log('o token é valido, redirecionando')
                return app_route.push('/home')
            }
            console.log('o token é inválido, e foi removido')
            window.login_token.removeItem('gpl_lgToken')
            return ''
        }
        catch(e){return 'no-token'}
    }
    return 'no-scode'
}
