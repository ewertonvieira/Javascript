"use strict"

function teste() {
    let nome = 'x'
    if (true) {
        console.log("dentro do If do teste " + nome)
    }
    console.log("dentro do teste: " + nome)
}

teste()

console.log("fora de teste: " + nome)