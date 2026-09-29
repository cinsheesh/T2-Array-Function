import { daftarArtis } from "./daftarArtis.js";

//1. Map()
const lagu = daftarArtis.map(a => ({
    artis: a.nama,
    album: a.album
}));

console.log("==MAP==")
console.log(lagu);

// 2. filter()
const tahun2018 = daftarArtis
    .filter(a => a.tahunRilis >= 2018)          
    .map(a => ({                               
        nama: a.nama,
        tahun: a.tahunRilis
    }));

console.log("\n==FILTER==")
console.log(tahun2018);

//3. reduce
const totalLagu = daftarArtis.reduce((total, a) => total + a.jumlahLagu, 0);
console.log("\n==REDUCE==")
console.log('jumlah lagu:', totalLagu);

//4. Find, some, every
const cari = daftarArtis.find(a => a.jumlahLagu === 16);
const adaGa = daftarArtis.some(a => a.jumlahLagu >= 17);
const aktif = daftarArtis.every(a => a.aktif);

console.log("\n== FIND ==");
console.log(cari);

console.log("\n== SOME ==");
console.log(adaGa);

console.log("\n== EVERY ==");
console.log(aktif);