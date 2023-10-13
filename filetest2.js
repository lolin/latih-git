// function welcome(namauser){
// let data = " welcome to  "${namauser}  " paradise beach

//     return data

  
// }
// console.log(welcome("josua"));

const functionReturnFunction = () => {
    return () => {
        console.log('kkkk')
    }
}

functionReturnFunction()()