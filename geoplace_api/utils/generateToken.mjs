
export default (len)=> {
    let magic = '';
    for (let x=0; x<len; x++) 
        magic += (Math.floor(Math.random()*9)+1);
    
    return magic
}