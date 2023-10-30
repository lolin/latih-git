const getData = fetch('https://fakestoreapi.com/products', {
    method: 'GET'
});
//cara panjang
// getData.then((res) => {
//     // console.log(res.json)
//     return res.json()
// }).then((products) => {
//     // console.log(products)
//     const product = products.map(product => product.title);
//     console.log(`Jumlah data produk: ${product.length}, dengan list produk sebagai berikut: \n`)
//     for (let x = 0; x < product.length; x++) {
//         console.log(product[x])
//     }
// })

// cara singkat
getData.then(res => {
    res.json().then((products) => {
        const product = products.map(product => product.title);
        console.log(`Jumlah data produk: ${product.length}, dengan list produk sebagai berikut: \n`)
        for (let x = 0; x < product.length; x++) {
            console.log(product[x])
        }
    })
})
