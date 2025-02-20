
import crypto from 'crypto'

export const gen_scode = ()=> {
    const dict = "abcdEfghijkLmnop012345QRSTUVXYZ_"
    let scode = 'gEpL_'
    
    for (let i = 0; i<20; i++) {
        let rnd = crypto.randomInt(0,dict.length)
        scode += dict[rnd];
    }
    return scode;
}

export const check_scode = (scode)=> {
    if (
        scode == null || 
        scode == undefined ||
        scode.length != 25
    )
        return false;
    
    const dict = "abcdEfghijkLmnop012345QRSTUVXYZ_"
    return [...scode].every(char => dict.includes(char))
}
