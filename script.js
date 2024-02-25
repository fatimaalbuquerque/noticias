// document se refere ao html
// querySelector faz uma busca pelo elemento html

const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

// adicionar um ouvinte de evento, que monitora o que vai acontecer, neste caso seria um click, e assim faz uma função, que essa seria abrirMenu
botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}