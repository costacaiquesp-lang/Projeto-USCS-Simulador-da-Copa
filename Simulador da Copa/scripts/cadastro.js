function iniciarJogo() {

    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("jogo").style.display = "block";

    let nome = prompt("Digite seu nome:");
    let idade = prompt("Digite sua idade:");

    // ✔ seleções válidas
    let selecoesValidas = [
        "mexico","africadosul","coreia","tchequia",
        "canada","bosnia","catar","suica",
        "brasil","marrocos","haiti","escocia",
        "eua","paraguai","australia","turquia"
    ];

    let selecao;

    // 🔁 valida até acertar
    while (true) {

        selecao = prompt("Digite sua seleção:");

        let normal = selecao.trim().toLowerCase().replace(/\s/g,'');

        if (selecoesValidas.includes(normal)) {
            break;
        }

        alert("❌ Seleção inválida! Tente novamente.");
    }

    document.getElementById("Nome").innerText = "Nome: " + nome;
    document.getElementById("Idade").innerText = "Idade: " + idade;
    document.getElementById("Selecao").innerText = "Seleção: " + selecao;

    iniciarCopa();
}