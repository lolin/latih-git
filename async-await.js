const url = 'https://pokeapi.co/api/v2/pokemon';

//async selalu menghasilkan promise
//async diikuti dengan fungsi await
const main = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET'
        });
        const payload = await response.json()
        const pokelist = payload.results.map(pokelist => pokelist.name);
        console.log(`Jumlah data pokemon adalah ${pokelist.length} ekor, dengan list sebagai berikut:`)
        for (let x = 0; x < pokelist.length; x++) {
            console.log(pokelist[x])
        }

    } catch (error) {
        console.log('error ', error)
    }

}

main()