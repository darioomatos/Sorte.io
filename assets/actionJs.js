// Função para gerar o spinner
function showSpinner() {
    var target = document.getElementById('spinner');
    var spinner = new Spinner().spin(target);
}

// Função para sortear um nome aleatório
function sortearNome() {
    // Mostrar o spinner enquanto carrega o resultado
    showSpinner();

    // Fazer uma requisição AJAX para obter um nome aleatório do servidor
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'sortear.php');
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Atualizar o elemento de resultado com o nome sorteado
            document.getElementById('resultado').textContent = xhr.responseText;
        }
    };
    xhr.send();
}

// Adicionar um listener para o botão de sorteio
document.getElementById('sortear').addEventListener('click', sortearNome);

// Adicionar um listener para o formulário de envio
document.getElementById('form').addEventListener('submit', function (event) {
    // Prevenir o comportamento padrão do formulário
    event.preventDefault();

    // Obter o valor do campo de nome
    var nome = document.getElementById('nome').value;

    // Fazer uma requisição AJAX para salvar o nome no servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'salvar.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Limpar o campo de nome após salvar
            document.getElementById('nome').value = '';
        }
    };
    xhr.send('nome=' + encodeURIComponent(nome));
});