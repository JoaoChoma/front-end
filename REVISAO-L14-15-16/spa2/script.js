document.addEventListener("DOMContentLoaded", function () {
    const formSection = document.getElementById("formSection");
    const dataSection = document.getElementById("dataSection");
    const dataName = document.getElementById("dataName");
    const dataEmail = document.getElementById("dataEmail");
    const myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o comportamento padrão de envio do formulário

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Atualiza os dados exibidos na seção de dados
        dataName.textContent = name;
        dataEmail.textContent = email;

        // Alterna entre as seções de formulário e dados
        formSection.classList.add("hidden");
        dataSection.classList.remove("hidden");
    });
});
