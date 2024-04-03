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
