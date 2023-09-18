document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o comportamento padrão de envio do formulário

        // Obtém os dados do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Cria uma nova página HTML para exibir os dados do formulário
        const newPage = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Dados do Formulário</title>
            </head>
            <body>
                <h1>Dados do Formulário Enviados</h1>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong> ${message}</p>
            </body>
            </html>
        `;

        // Abre a nova página em uma nova guia do navegador
        const newWindow = window.open();
        newWindow.document.open();
        newWindow.document.write(newPage);
        newWindow.document.close();
    });
});
