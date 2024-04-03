console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].textContent)
// 2 - selecionando elemento por tags

const listItens = document.getElementsByTagName("li")
console.log(listItens)

// 3 - selecionando elemento por id

const title = document.getElementById("title")
console.log(title)

// 4 - selecionando elemento por classe

const products = document.getElementsByClassName("product")
console.log(products)

// 5 - selecionando elemento por css


const productsQuery = document.querySelectorAll(".product")

const mainContainer = document.querySelector(" #main-container")
console.log(mainContainer)

// 6 - insertBefore

const p = document.createElement("p")
const header = title.parentElement
console.log(header)
header.insertBefore(p, title)
console.log(header)

// 7 - appendChild
// adicionar elemnto dentro de outro elemento add ultimo elemento do pai

const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
navLinks.appendChild(li)

// 8 - replaceChild
// troca um elementocom base no elemento pai

const h2 = document.createElement("h2")
h2.textContent = "meu novo titulo"
header.replaceChild(h2, title)
// elemento novo e elemento a ser trocado

// 9 - createTextNode
// colocar um elemento dentro do outro

const myText = document.createTextNode("agora vamos colocar mais um titulo")
const h3 = document.createElement("h3")
h3.appendChild(myText)
mainContainer.appendChild(h3)

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a")
// 1 - teste - pegamos apenas o primeiro elemento a
console.log(firstLink) 
//2 - teste - alteramos o atributo href do elemento
firstLink.setAttribute("href", "https://www.sp.senac.br/")
//3 - teste - capturando
console.log(firstLink.getAttribute("href"))
//
firstLink.setAttribute("target", "_blank")

// 11 - posicao do elemento

mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "15px"