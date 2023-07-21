//Implementando a referência do botão Parcelas.
var btParcelas = document.getElementById("btParcelas");
//Evento que, ao clicar no botão, a programação da função anônima é executada.
btParcelas.addEventListener("click", function () {
    //Implementando as referências aos elementos do documento HTML.
    var enPreco = document.getElementById("enPreco");
    var rsParcelas = document.getElementById("rsParcelas");
    //Obtendo o conteúdo do campo de Preço.
    var preco = Number(enPreco.value);

    //Acumulador para as formas de pagamento em parcelas.
    var lista = "";

    //Estrutura de repetição para montar as opções de pagamento parcelado.
    for (var i = 1; i <= 10; i++) {
        //Armazena na lista o nº de parcelas e o cálculo dos valores parcelados.
        lista += i + "x de R$: " + (preco / i).toFixed(2) + "\n";
    }
    // Exibir a lista no elemento rsParcelas.
    rsParcelas.textContent = "Formas de Pagamento\n\n" + lista;
}); 