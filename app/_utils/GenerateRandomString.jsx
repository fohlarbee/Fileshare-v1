export const generateRandomString = ()=> {
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = '';
    for(let i = 0; i <=6 ; i ++){
        result+=symbols.charAt(Math.floor(Math.random() * symbols.length))  ;

    }

    return result
}