const hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
hari.forEach(function (item) {
    console.log(`foreach hari :`, item)
});
//===============================================================
const koleksi = ["ayam", 2, "bebek", "angsa", "burung", 6, 7, 8, "cicak", 10]
const cekString = (data) => {
    return typeof data == "string"

}
const koleksiString = koleksi.filter(cekString)
console.log('filter string: ', koleksiString)
//=============================================================
const koleksiSeteladiFilter = koleksiString.map((str) => {
    return `\n nilai ${str} adalah ${typeof str}`
})

console.log('\n map data :', koleksiSeteladiFilter)
const koleksi2 = ['belalang', 'gajah', 'jangkrik']
console.log('\nconcat data :', koleksiSeteladiFilter.concat(koleksi2))
