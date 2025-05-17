import { nasiGorengMasPoer } from "./nasiGorengMasPoer.js"
export class nasgor extends nasiGorengMasPoer{
    nasgor(){
        console.log(`${this.jenis}`)
    }

    //overide
    pesanMenu(jenis, pedes){
        console.log(`${this.jenis} sedang dibuat cuy, ${this.pedes} yaa`)
    }
}