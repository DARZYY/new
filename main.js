let cars =  ["bmw", "ford", "mustang" ] 

let carsList = cars.sort((car) => car.langht > 3)

console.log(cars)

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let secces = true
        if (secces) {
            resolve("OK!Status = 200")
        } else {
            reject("Error")
        }
    }, 2000)
})

myPromise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})

