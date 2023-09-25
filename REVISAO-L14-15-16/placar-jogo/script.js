// Variáveis para armazenar o placar dos times
let placarCasa = 0;
let placarVisitante = 0;

// Função sem parâmetros para atualizar o placar
function atualizarPlacar() {
    document.getElementById("placarCasa").textContent = placarCasa;
    document.getElementById("placarVisitante").textContent = placarVisitante;
}

// Função com parâmetros para aumentar o placar de um time
function aumentarPlacar(time) {
    if (time === "casa") {
        placarCasa++;
    } else if (time === "visitante") {
        placarVisitante++;
    }

    atualizarPlacar();
}

// Adicionar eventos de clique aos botões para aumentar o placar
document.getElementById("aumentarCasa").addEventListener("click", function () {
    aumentarPlacar("casa");
});

document.getElementById("aumentarVisitante").addEventListener("click", function () {
    aumentarPlacar("visitante");
});
