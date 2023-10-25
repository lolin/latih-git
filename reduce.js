const koleksiNomor = [100, 200, 225, 666]

const hasil = koleksiNomor.reduce(
    (total, setTotal) => {
        //contoh untuk pertama:
        //total = 0 + 100 (0 karna nilai awal total adalah 0)
        //sementara 100 adalah array pertama yang nilainya disimpan di dalam setTotal)
        return total = total + setTotal
    },
    0 //nilai awal dari total
)
console.log(hasil)