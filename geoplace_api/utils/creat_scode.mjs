
/*
    utilizar algo como UUID, que tem uma entropia bem alta
    mas por enquanto essa função vai servir bem..

*/
export default ()=> {
    let letters = [
            'a','c','Z','#','@',
            'l','x','p','s','o',
            '1','8','2','8','0',
            'U','S','B','X','G'
    ];
    let scode = 'GePl_'

    for (let x=0; x<25; x++) {
        let rand = (Math.floor(Math.random()*19));
        scode += letters[rand];
    }

    return scode;
}