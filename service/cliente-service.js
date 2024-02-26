const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
    `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        
        // Utilizando AJAX para realizar a comunicação entre a aplicação e a API
        const http = new XMLHttpRequest()
        console.log(http)
        
        // Abrir comunicação entre aplicação e API
        // Argumentos: o que será pedido, endereço para onde será enviada a requisição
        http.open('GET', 'http://localhost:3000/profile')
        
        
        // Ao carregar a página, imprimir a resposta no console 
        http.onload = () => {
            if (http.status >= 400) {
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }
        
        http.send()
    })
    return promise    
}

listaClientes()
.then(data => {
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    })
})
