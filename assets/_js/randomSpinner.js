// Função para criar um spinner na tela enquanto o resultado está sendo calculado
function criarSpinner() {
    var alvo = document.getElementById("resultado");
    var opcoes = {
        lines: 13,
        length: 20,
        width: 10,
        radius: 30,
        scale: 1,
        corners: 1,
        color: '#000',
        fadeColor: 'transparent',
        animation: 'spinner-line-fade-default',
        duration: 1.5 * 1000,
        zIndex: 2e9,
        className: 'spinner',
        top: '50%',
        left: '50%',
        shadow: '0 0 1px transparent',
        position: 'absolute'
    };
    var spinner = new Spinner(opcoes).spin(alvo);
    return spinner;
}

// Função para sortear um nome aleatório do banco de dados
function sortearNome() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var nomes = JSON.parse(this.responseText);
            var nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)];
            var resultado = document.getElementById("resultado");
            resultado.innerHTML = nomeSorteado;
            spinner.stop();
        }
    };
    xhr.open("GET", "sortear.php", true);
    xhr.send();
    var spinner = criarSpinner();
}

// Evento para escutar o clique no botão "Sortear"
document.getElementById("sortear-btn").addEventListener("click", function () {
    sortearNome();
});

// Evento para escutar o envio do formulário para salvar um nome no banco de dados
document.getElementById("sorteador-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("nome").value = "";
            alert("Nome salvo com sucesso!");
        }
    };
    xhr.open("POST", "salvar.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("nome=" + nome);
});
