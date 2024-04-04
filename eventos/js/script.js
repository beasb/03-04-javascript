const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("Clicou!")
})

// test

const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
    console.log("evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

const title = document.querySelector("#my-title")

title.addEventListener("click", (event) => {
    // console.log(event)
    console.log(e.offsetX)
})

const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    console.log("evento 2")
    e.stopPropagation()
})

// a.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("não alterou a página")
// })

// document.addEventListener("keyup", (e) => {
//     console.log(`soltou a tecla ${e.key}`) 
// })
// document.addEventListener("heydown", (e) => {
//     console.log(`pressionou a tecla ${e.key}`)
// })

// const mouseEvents = document.querySelector("#mouse")
// mouseEvents.addEventListener("mousedown", () => {
//     console.log("pressionou o botão")
// })
// mouseEvents.addEventListener("mouseup", () => {
//     console.log("soltou o botão")
// })
// mouseEvents.addEventListener("dblclick", () => {
//     console.log("clique duplo")
// })
// window.addEventListener("scroll", (e) => {
//     if (window.scrollY > 200) {
//         console.log("passamos 200px")
//     }
// })

const dataAtual = new Date()
console.log(dataAtual)

// Obter o dia do mês
const dia = dataAtual.getDate()
console.log(`dia: ${dia}`)
//

//
const mes = dataAtual.getMonth() + 1
console.log(`mes ${}`)

//
const dataFormatada = `${dia}/${mes}/${ano}`
console.log(`data formatada: ${dataFormatada}`)

//

const frutas = ["maçã", "banana", "laranja", "pera", "uva"]

const frutaComL = frutas.find(fruta => fruta.startsWith("l"))
console.log(`fruta com l: ${frutaComL}`)
//
frutas.forEach(fruta => console.log(`Nome da fruta: ${fruta}`))

const tamanhoFrutas = frutas.map(fruta => fruta.length)
console.log(`tamanho das frutas ${tamanhoFrutas}`)

//

const listaFrutas = frutas.join(", ")
console.log(`lista de frutas: ${listaFrutas}`)
