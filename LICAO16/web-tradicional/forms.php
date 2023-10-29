<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário na Mesma Página</title>
</head>
<body>
    <h1>Formulário na Mesma Página</h1>
    
    <?php
    // Verifica se o formulário foi enviado
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Processa os dados do formulário aqui
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        
        // Exibe uma mensagem de sucesso
        echo "<p><strong>Mensagem enviada com sucesso!</strong></p>";
        echo "<p><strong>Nome:</strong> $name</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Mensagem:</strong> $message</p>";
    }
    ?>

    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="message">Mensagem:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <br>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
