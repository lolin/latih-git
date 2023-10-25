const koleksiNomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let jumlahEksekusi = 0

const filterNomorGenap = (nomor) => {
    if (nomor % 2 == 0) {
        return true
    } else {
        return false
    }
}
const filterNomorGanjil = (nomor) => {
    return nomor % 2 > 0
}
const koleksiNomorGenap = koleksiNomor.filter(filterNomorGenap)
const koleksiNomorGanjil = koleksiNomor.filter(filterNomorGanjil)

console.log(koleksiNomorGenap)
console.log(koleksiNomorGanjil)