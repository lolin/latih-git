const koleksiNomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const koleksiSeteladiFilter = koleksiNomor.map((nomor) => {
    const ganjilOrGenap = nomor % 2 == 0 ? 'genap' : 'ganjil'
    return `nilai ${nomor} adalah ${ganjilOrGenap}`
})

console.log(koleksiSeteladiFilter)