// let i = 6;
// const interval = setInterval(() => {
//     i--;
//     console.log('putu hitung mundur :', i)

// }, 1000)


// setTimeout(() => {
//     console.log('putu Stop Set Interval')
//     clearInterval(interval) //stop interval
// }, 6000)
var angka = []
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (7 > 2)
            return reject("salah alamat")
        resolve({
            message: "seccess",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        })
    }, 2000)
})

promise.then((data) => {
    // console.log(data)
    angka = data.data
}).catch((err) => {
    console.log('block catch')
    console.log(err)
}).finally(() => {
    console.log('Ini finaly');
    angka.map((nomor) => {
        const ganjilOrGenap = nomor % 2 == 0 ? 'genap' : 'ganjil'
        console.log(`nilai ${nomor} adalah ${ganjilOrGenap}`)
    })
})

