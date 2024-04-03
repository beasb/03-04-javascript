//             exercicio 1
// function minefunction(){
//     console.log("testando")
// }

// minefunction()

// const minhaFuncaoEmVariavel = function(txt){
//     console.log(`imprimindo: ${txt}`)
// }

// minhaFuncaoEmVariavel("sapato")
// minhaFuncaoEmVariavel("colher")
// minhaFuncaoEmVariavel(5+5)

//           exercicio 2

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2){
//     console.log(`a soma entre ${n1} + ${n2} é = ${n1 + n2}`)
//     console.log(`a sub entre ${n1} - ${n2} é = ${n1 - n2}`)
//     console.log(`a div entre ${n1} / ${n2} é = ${n1 / n2}`)
//     console.log(`a mulr entre ${n1} * ${n2} é = ${n1 * n2}`)
// }

// soma(a,b)
// soma(c,b)
// soma(d,a)

//           exercicio 3

// function raizQuadrada (numero){
//     console.log(numero * numero)
// }

// raizQuadrada(4)

//           exercicio 3.2

// function raizQuadrada (numero){
//    return numero * numero
// }

// console.log(raizQuadrada(4))

//           exercicio 3.3

// const raizquadrada = (numero) => {
//    return numero * numero
// }

// console.log(raizquadrada(4))

//           exercicio 4

// const testeArrow = () => {
//     console.log("essa é uma arrow function")
// }

// testeArrow()

//           exercicio 5

// const parOuImpar = (n) =>{
//     if(n % 2 === 0){
//         console.log(`${n} é par`)
//         return
//     }
//     console.log(`${n} é impar`)
// }

// parOuImpar(2)

//           exercicio 6

// const lista = [1, 2, 3, 4, 5]

// console.log(lista)
// console.log(typeof lista)

// console.log(lista[1])
// console.log(lista[0])
// console.log(lista[6])
// console.log(lista.length)

//            exercicio 6.2

// const lista = [1, 2, 3, 4, 5]

// for(let i = 0; i< lista.length; i++){
//     console.log(`elemento da lista: ${lista[i]}`)
// }

//            exercicio 6.3

// const lista2 = ["fusca", "variant", "chevete", "golf", "opala", "brasilia"]

// for(let i = 0; i < lista2.length; i++){
//     console.log(`elemento da lista: ${lista[i]}`)
// }

//           exercicio 7

// escreva uma array contendo as cores azul, amarelo, verde, vermelho e branco, escreva uma estrutura de repetição laço for para retornar todos elementos do array

// const lista = ["azul", "amarelo", "verde", "vermelho", "branco"]

// for(let i = 0; i < lista.length; i++){
//     console.log(`elemento da lista: ${lista[i]}`)

// }

//               exercicio 7.2

// const nums = [1, 2, 3, 4, 5]

// nums.forEach((n) => {
//     console.log(`o numero atual é: ${n}`)
// })

//               exercicio 8

// const numbers = [5, 12, 4, 22]
// const otherNumbers = [1, 2, 3]

// const allNumbers = number.concat(otherNumbers)

// console.log(allNumbers)

//               exercicio 9 

// const text = "algum texto";
// const text2 = "EITA JOVEM";
// console.log(text.toUpperCase())
// console.log(text2.toLocaleLowerCase())

//               exercicio 10

// const array = ["a", "b", "c"]

// array.push("d")

// console.log(array)
// console.log(array.length)

//               exercicio 10.2

// const array = ["a", "b", "c"]
// array.pop()
// const itemRemovido = array.pop()

// console.log(itemRemovido)
// console.log(array)
// console.log(array.length)

// array.push("dá", "para", "inserir", "vários")

// console.log(array)

//               exercicio 11

const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift("z", "x", "y")

letters.unshift("p")

console.log(letters)




