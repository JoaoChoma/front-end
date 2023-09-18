<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processamento do Formulário</title>
</head>
<body>
    <h1>Dados Recebidos do Formulário</h1>
    <?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        
        echo "<p><strong>Nome:</strong> $name</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Mensagem:</strong> $message</p>";
    } else {
        echo "<p>Nenhum dado foi recebido.</p>";
    }
    ?>
</body>
</html>
