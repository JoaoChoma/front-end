let pedidoId = 1; // Número de identificação inicial do pedido

// Função para adicionar um item ao pedido do cliente
function adicionarItemAoPedido(nome, preco) {
    const listaPedido = document.getElementById("pedido-lista");
    const totalPedido = document.getElementById("total-pedido");

    // Crie um elemento <li> para o item do pedido
    const li = document.createElement("li");
    li.innerHTML = `${nome} - R$ ${preco.toFixed(2)} <button class="remove-item" onclick="removerItemDoPedido(this, ${preco})">Remover</button>`;
    
    // Adicione o item à lista de pedidos
    listaPedido.appendChild(li);

    // Atualize o total do pedido
    const totalAtual = parseFloat(totalPedido.textContent.replace("Total: R$ ", ""));
    totalPedido.textContent = `Total: R$ ${(totalAtual + preco).toFixed(2)}`;
    
    // Exiba a mensagem do pedido
    exibirMensagemPedido();
}

// Função para remover um item do pedido do cliente
function removerItemDoPedido(botaoRemover, preco) {
    const listaPedido = document.getElementById("pedido-lista");
    const totalPedido = document.getElementById("total-pedido");

    // Remova o item da lista de pedidos
    const li = botaoRemover.parentNode;
    listaPedido.removeChild(li);

    // Atualize o total do pedido
    const totalAtual = parseFloat(totalPedido.textContent.replace("Total: R$ ", ""));
    totalPedido.textContent = `Total: R$ ${(totalAtual - preco).toFixed(2)}`;

    // Exiba a mensagem do pedido
    exibirMensagemPedido();
}

// Função para exibir a mensagem do pedido
function exibirMensagemPedido() {
    const mensagemPedido = document.getElementById("pedido-mensagem");
    const listaPedido = document.getElementById("pedido-lista");

    if (listaPedido.children.length > 0) {
        mensagemPedido.textContent = "Pedido em andamento:";
    } else {
        mensagemPedido.textContent = "Nenhum pedido realizado.";
    }
}

// Função para fechar o pedido e informar que está em preparo
function fecharPedido() {
    const listaPedido = document.getElementById("pedido-lista");
    const totalPedido = document.getElementById("total-pedido");
    const mensagemPedido = document.getElementById("pedido-mensagem");
    const numeroPedido = document.getElementById("numero-pedido");

    // Verifique se há itens no pedido
    if (listaPedido.children.length > 0) {
        // Atualize o número de identificação do pedido e exiba-o
        numeroPedido.textContent = `Pedido #${pedidoId}`;
        
        // Limpe a lista de pedidos e o total
        listaPedido.innerHTML = "";
        totalPedido.textContent = "Total: R$ 0.00";

        // Informe que o pedido está em preparo
        mensagemPedido.textContent = "Pedido em preparo. Aguarde, por favor.";

        // Incremente o número de identificação do pedido
        pedidoId++;
    }
}

// Chame a função para exibir a mensagem do pedido quando a página carregar
exibirMensagemPedido();

