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

// let result = prompt('coloquei o numero:')
// let randomNumber = Math.round(Math.random() * 10)

// let xAttempts = 0;

// while (Number(result) != randomNumber) {
//     result = prompt('coloque outro numero: ')
//     xAttempts++
// }

// function quantidade() {
//     if (xAttempts > 1) {
//         return 'vezes'
//     } else {
//         return 'tentativa'
//     }
// }

// alert(`boa em casa, foi em ${xAttempts} ${quantidade()}`)

// let item = []

// function pegarMenu() {
//     let menu = Number(prompt(`
//     ole o menu
//     1 fale
//     2 moste
//     3 saia!`))

//     if (menu === 1) {
//         let itens = prompt("fale a fruta: ")
//         item.push(itens)
//         console.log('um', itens)
//         pegarMenu()
//     }
//     else if (menu === 2) {
//         if (item.length >= 1) {
//             alert("Itens: " + item.join(" - "));
//             pegarMenu()
//         }else {
//             alert('não tem nada aqui')
//         }
//     }
//     else if (menu === 3) {
//         alert('tchau!!')
//     }
//     else {
//         return alert("vc colocou errado e os nomes até o momento é " + item)
//     }
// }

// console.log('dois', item)
// pegarMenu()

// while (true) {
//     let option = Number(prompt(`
// numeros 
// 1
// 2
// 3
// `))

// let item = []

// switch(option) {
//     case 1: {
//         let caseOne = prompt('fruta? ')
//         item.push(caseOne)
//         break

//     }
//     case 2: {
//         alert(item)
//     }
//     case 3: {
//         break
//     }
// }

// console.log('1', item)
// }

let patients = [
    {
        name: "João",
        idade: 23,
        weight: 180,
        height: 1.81
    },
    {name: "paulo",
    idade: 23,
    weight: 50,
    height: 1.21},
    {name: "welligton",
    idade: 23,
    weight: 90,
    height: 1.91}]

    console.log('1', patients[0])

// let patientsNames = []

// // for(let i = 0; i < patients.length; i++) {
// //     patientsNames[i] = patients[i].name
// // }

// for(let i of patients) {
//     patientsNames.push(i.name)
// }

// alert(patientsNames)
// // alert(patientsNames)


function calcIMC(item) {

    alert(`
    olá ${item.name} o seu IMC é ${
        (((item.weight) / (item.height **2)).toFixed(2))
    }`)
}


for(let i of patients){
    calcIMC(i)
}