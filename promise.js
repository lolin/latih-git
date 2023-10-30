function hewan(key) {
    console.log('jalan1')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (key !== "putu")
                return reject("salah key hewan")
            resolve([
                {
                    id: 1,
                    name: "Bebek",
                    idJenis: 1
                },
                {
                    id: 2,
                    name: "Kucing",
                    idJenis: 2
                }
            ])
        }, 2000)
    })
}

function jenisHewan(key) {
    console.log('jalan2')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (key !== 'promise')
                return reject("salah key jenis hewan")
            resolve([
                {
                    id: 1,
                    name: "Omnivora"
                },
                {
                    id: 2,
                    name: "Karnivora"
                },
                {
                    id: 3,
                    name: "Herbivora"
                },
            ])
        }, 2000)
    })
}

Promise.all([
    hewan('putu'),
    jenisHewan('promise')
]).then((dataJenisHewan) => {
    const dataHewan = dataJenisHewan[0]
    const dataJenis = dataJenisHewan[1]
    for (const curHewan of dataHewan) {
        const tipeHewan = dataJenis.find(item => item.id == curHewan.idJenis)
        console.log(`Hewan ${curHewan.name} adalah jenis ${tipeHewan.name}`)
    }
}).catch((err) => {
    console.log('block catch')
    console.log(err)
}).finally(() => {
    console.log('Ini finaly');
})