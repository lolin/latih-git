const handphone1 = ['Samsung Galaxy S', 'Iphone 14', 'Samsung Galaxy Tab']
const handphone2 = [
    {
        brand: "samsung",
        model: 'Samsung Galaxy S',
        battery: "3600mah",
        processor: "a14",
        ram: "6GB",
    },
    {
        brand: "Apple",
        model: 'Iphone 14',
        battery: "5600mah",
        processor: "a14",
        ram: "8GB",
    },
    {
        brand: "xiaomi",
        model: 'Xiaomi 10T',
        battery: "3600mah",
        processor: "snapdragon",
        ram: "6GB",
    }
]

handphone1.forEach((hp) => {
    console.log(hp)
})

handphone2.forEach((hp) => {
    console.log("brand " + hp.brand)
})