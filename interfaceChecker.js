export function interfaceChecker (obj){
    if(typeof obj.pesanMenu !== "function"){
        throw new Error ("Pesanan harus di pesen masbro klo ga dipesen gimana kita tau klo masbro mesen?")
    }else{
        console.log("berhasil cuy interfacenya")
    }
};