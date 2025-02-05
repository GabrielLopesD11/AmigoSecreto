function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value; // Pega o valor do input amigo
    const lista = document.getElementById('listaAmigos'); // Pega a lista de amigos
    const item = document.createElement('li'); // Cria um item de lista
    const items = lista.getElementsByTagName('li');// Pega todos os itens da lista

    if (amigo === '' || amigo === null) {
        alert('Você precisa digitar o nome de um amigo');
    } // Verifica se o input está vazio

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === amigo) {
            document.getElementById('amigo').value = '';
            alert('Este amigo já foi adicionado');
            return;
        }
    } // Verifica se o amigo já foi adicionado

    item.textContent = amigo; // Adiciona o nome do amigo ao item criado na linha 4
    lista.appendChild(item); // Adiciona o item à lista de amigos 
    document.getElementById('amigo').value = ''; // Limpa o input
}

function sortearAmigo() {
    const list = document.getElementById('listaAmigos'); // Pego a lista de amigos adicionados  
    const resultado = document.getElementById('resultado'); // Pego o elemento que vai exibir o resultado
    const items = list.getElementsByTagName('li'); // Pego todos os itens da lista
    const sorteado = Math.floor(Math.random() * items.length); // Sorteio um número aleatório


    if (items.length === 0) {
        alert('Adicione amigos antes de sortear');
        return;
    } // Verifica se a lista de amigos está vazia

    resultado.textContent = items[sorteado].textContent; // Exibe o amigo sorteado
}