//------------------User Interface-----------------\\


//import semua class yang udh di buat
import { nasiGorengMasPoer } from "./nasiGorengMasPoer.js";
import { nasgor } from "./nasigoreng.js";
import { mieNyemek } from "./mieNyemek.js";
import { baso } from "./extraBaso.js";
import { interfaceChecker } from "./interfaceChecker.js";


//bikin class baru untuk masukin data
const nasigorengmaspoerCAFE = new nasiGorengMasPoer("nasi goreng ampela", "sedeng/level2");
const nasigorengmaspoercafe = new mieNyemek("mie nyemek", "pedes");
const testOveride = new nasgor("nasi", "pedes")

//kita kasih interface
interfaceChecker(nasigorengmaspoerCAFE); //output: berhasil cuy interfacenya
interfaceChecker(baso); //output: Error: Pesanan harus di pesen masbro klo ga dipesen gimana kita tau klo masbro mesen?

//kita kasih extra topping
Object.assign(nasigorengmaspoerCAFE, baso);
Object.assign(nasigorengmaspoercafe, baso);

//kita pesan
nasigorengmaspoerCAFE.fungsiBakso(); //output: extra bakso ditambahkan
nasigorengmaspoercafe.fungsiBakso(); //output: extra bakso ditambahkan
nasigorengmaspoerCAFE.pesanMenu(); //output: pesanan nasi goreng ampela anda sedang di buat, dengan tingkat kepedasan sedeng/level2
nasigorengmaspoercafe.pesanMenu(); //output: pesanan mie nyemek anda sedang di buat, dengan tingkat kepedasan pedes

//untuk cek stock
console.log(nasigorengmaspoerCAFE.ingfoStock()); //output: 10
console.log(nasigorengmaspoercafe.ingfoStock()); //output: 10

//bentuk polymorphism/penerapan overide
testOveride.pesanMenu(); //output: nasi sedang dibuat cuy, pedes yaa
