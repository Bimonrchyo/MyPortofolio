export class nasiGorengMasPoer{
    #stock;//enkapsulasi

    constructor(jenis, pedes){
        this.jenis = jenis;
        this.pedes = pedes;
        this.#stock = 10;
    }
       
        ingfoStock(){
            return this.#stock;
        }

        pesanMenu(jenis, pedes){
            if(this.#stock>=1){
                this.#stock --;
                console.log(`pesanan ${this.jenis} anda sedang di buat, dengan tingkat kepedasan ${this.pedes}`);
                }else{
                    throw new Error ("stock abis cuyy");
                }
        } 
    };
