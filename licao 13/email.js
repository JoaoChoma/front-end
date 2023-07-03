//Implementação da função gerar e-mail do colaborador.
function cadastrarEmail() {
	//Criando a referência aos elementos do formulário na página do site.
	var enFuncionario = document.getElementById("enFuncionario");
	var rsEmail = document.getElementById("rsEmail");

	//Obtendo o conteúdo do campo do funcionário.
	var funcionario = enFuncionario.value;

		//Estrutura condicional para validar se tem espaço no nome ou se está vazio.
		if (funcionario == "" || funcionario.indexOf(" ") == -1) {
			alert("Por favor, informe o nome completo do funcionário!");
			enFuncionario.focus();
			return;
		}
	
		//Método que fatia o nome em itens para serem armazenados em um vetor.
		var partes = funcionario.split(" ");
		//Variável que concatena as letras no vetor.
		var email = "";
		//Tamanho total dos itens a serem armazenados no vetor.
		var tam = partes.length;
	
		//Estrutura de repetição para percorrer os itens do vetor, com exceção do último.
		for (var i=0; i<tam -1; i++) {
			//Função charArt(0), para obter a letra inicial de cada item.
			email += partes[i].charAt(0);
		}
	
		//Concatenação das letras iniciais do nome com a última parte (sobrenome) e a empresa.
		email += partes[tam - 1] + "@xxxxxxx.xxx.xx";
	
		//Exibindo o e-mail em letras minúsculas.
		rsEmail.textContent = "E-mail: " + email.toLowerCase();
	}
	//Criando a referência ao botão (btEmail) e associando a função ao evento click.
	var btEmail = document.getElementById("btEmail");
	btEmail.addEventListener("click", cadastrarEmail); 