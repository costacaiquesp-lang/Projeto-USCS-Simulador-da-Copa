let classificados = [];
let semifinalistas = [];
let finalistas = [];

function normalizar(nome) {
    return nome.trim().toLowerCase().replace(/\s/g, '');
}

// 🟢 GRUPOS COM RODADAS
function jogarGrupo(nomeGrupo, times) {

    let pontos = {};

    for (let time of times) {
        pontos[time] = 0;
    }

    console.log("🔥 GRUPO " + nomeGrupo);

    let rodada = 1;

    for (let x = 0; x < times.length; x++) {
        for (let y = x + 1; y < times.length; y++) {

            let vencedor;

            // 🔁 REPETE ATÉ ACERTAR
            while (true) {

                vencedor = prompt(
                    "GRUPO " + nomeGrupo +
                    " | RODADA " + rodada + "\n\n" +
                    times[x] + " vs " + times[y] +
                    "\nQuem venceu?"
                );

                let v = normalizar(vencedor);

                if (v === normalizar(times[x])) {
                    pontos[times[x]]++;
                    break;
                }
                else if (v === normalizar(times[y])) {
                    pontos[times[y]]++;
                    break;
                }
                else {
                    alert("❌ Seleção inválida! Digite novamente.");
                }
            }

            rodada++;
        }
    }

    let ranking = Object.entries(pontos);
    ranking.sort((a, b) => b[1] - a[1]);

    classificados.push(ranking[0][0]);
    classificados.push(ranking[1][0]);
}

// 🏆 QUARTAS
function iniciarQuartas() {

    let jogos = [
        [classificados[0], classificados[3]],
        [classificados[2], classificados[1]],
        [classificados[4], classificados[7]],
        [classificados[6], classificados[5]]
    ];

    for (let jogo of jogos) {

        let vencedor;

        while (true) {

            vencedor = prompt(
                "🏆 QUARTAS\n" +
                jogo[0] + " vs " + jogo[1]
            );

            if (
                normalizar(vencedor) === normalizar(jogo[0]) ||
                normalizar(vencedor) === normalizar(jogo[1])
            ) {
                semifinalistas.push(vencedor);
                break;
            } else {
                alert("❌ Seleção inválida! Digite novamente.");
            }
        }
    }

    iniciarSemifinal();
}

// 🥅 SEMIFINAL
function iniciarSemifinal() {

    let jogos = [
        [semifinalistas[0], semifinalistas[2]],
        [semifinalistas[1], semifinalistas[3]]
    ];

    for (let jogo of jogos) {

        let vencedor;

        while (true) {

            vencedor = prompt(
                "🥅 SEMIFINAL\n" +
                jogo[0] + " vs " + jogo[1]
            );

            if (
                normalizar(vencedor) === normalizar(jogo[0]) ||
                normalizar(vencedor) === normalizar(jogo[1])
            ) {
                finalistas.push(vencedor);
                break;
            } else {
                alert("❌ Seleção inválida! Digite novamente.");
            }
        }
    }

    iniciarFinal();
}

// 🏆 FINAL (CAMPEÃO EM MAIÚSCULO)
function iniciarFinal() {

    let t1 = finalistas[0];
    let t2 = finalistas[1];

    let vencedor;

    while (true) {

        vencedor = prompt(
            "🏆 FINAL\n" +
            t1 + " vs " + t2
        );

        if (
            normalizar(vencedor) === normalizar(t1) ||
            normalizar(vencedor) === normalizar(t2)
        ) {

            let campeaoFinal = vencedor.toUpperCase();

            document.getElementById("campeao").innerText =
                "🏆 CAMPEÃO: " + campeaoFinal;

            document.getElementById("campeao").style.display = "block";

            alert("🏆 CAMPEÃO: " + campeaoFinal);

            break;

        } else {
            alert("❌ Seleção inválida! Digite novamente.");
        }
    }
}

// 🚀 INICIAR COPA
function iniciarCopa() {

    classificados = [];
    semifinalistas = [];
    finalistas = [];

    jogarGrupo("A", ["Mexico", "AfricaSul", "Coreia", "Tchequia"]);
    jogarGrupo("B", ["Canada", "Bosnia", "Catar", "Suica"]);
    jogarGrupo("C", ["Brasil", "Marrocos", "Haiti", "Escocia"]);
    jogarGrupo("D", ["EUA", "Paraguai", "Australia", "Turquia"]);

    iniciarQuartas();
}