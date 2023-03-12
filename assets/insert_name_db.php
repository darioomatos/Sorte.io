<?php

// Verifica se foi enviado um nome pelo formulário
if (isset($_POST['nome'])) {

    // Configurações de conexão com o banco de dados
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "db_sorteio";

    // Cria uma conexão com o banco de dados
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica se houve algum erro na conexão
    if ($conn->connect_error) {
        die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
    }

    // Prepara a query INSERT para inserir o nome no banco de dados
    $stmt = $conn->prepare("INSERT INTO nomes (nome) VALUES (?)");
    $stmt->bind_param("s", $nome);

    // Define o valor da variável $nome como o nome enviado pelo formulário
    $nome = $_POST['nome'];

    // Executa a query INSERT
    if ($stmt->execute()) {
        echo "Nome salvo com sucesso no banco de dados";
    } else {
        echo "Erro ao salvar o nome no banco de dados: " . $stmt->error;
    }

    // Fecha a conexão com o banco de dados
    $stmt->close();
    $conn->close();

} else {
    echo "Nenhum nome foi enviado pelo formulário";
}

?>