<?php

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

// Query para buscar a lista de nomes no banco de dados
$sql = "SELECT nome FROM nomes";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $nomes = array();

    // Cria um array com todos os nomes do banco de dados
    while ($row = $result->fetch_assoc()) {
        $nomes[] = $row["nome"];
    }

    // Seleciona um nome aleatório do array de nomes
    $nomeSorteado = $nomes[array_rand($nomes)];

    // Retorna o nome selecionado em formato JSON para o JavaScript
    echo json_encode($nomeSorteado);
} else {
    echo "Nenhum nome encontrado no banco de dados";
}

// Fecha a conexão com o banco de dados
$conn->close();

?>