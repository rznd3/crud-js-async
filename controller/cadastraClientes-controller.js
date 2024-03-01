import {clienteService} from '../service/cliente-service.js'

const forumulario = document.querySelector('[data-form]')

forumulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html'
    })
})