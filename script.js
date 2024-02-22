// console.log('teste')

// let math = Math.round(Math.random() * 10)
// let type = Number(prompt('fale o número? '))
// let types = [type]

// console.log("1", type)

// function conferir() {
//     if(math === type) {
//         alert('parabens infeliz!!')
//         return true
//     } else {
//         return false
//     }
// }

// while(!conferir()){
//     type = Number(prompt('fale outro numero: '))
//     types.push(type)

//     console.log('2', types)
// }

// let quantidade = types.length
// let text = (quantidade > 1) ? "tentativas" : "uma tentativa"; 

// alert(`parabens fulano, vc acertou em ${quantidade} ${text}`)

// console.log('gh', quantidade)

let result = prompt('coloquei o numero:')
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 0;

while (Number(result) != randomNumber) {
    result = prompt('coloque outro numero: ')
    xAttempts++
}

function quantidade() {
    if (xAttempts > 1) {
        return 'vezes'
    } else {
        return 'tentativa'
    }
}

alert(`boa em casa, foi em ${xAttempts} ${quantidade()}`)