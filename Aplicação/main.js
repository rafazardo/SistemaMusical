/*
Codigo utilizado para apenas um botao
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom; // query.onclick garante que quando o botao for acionado, a funcao sera atribuida
*/

function tocaSom(seletorAudio) {
    const seletor = document.querySelector(seletorAudio);

    if (seletor != null && seletor.localName === 'audio') seletor.play(); // === compara variaveis e seus tipos, enquanto == so compara valores
    else console.log('Elemento não encontrado ou seletor inválido');
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // Variavel do tipo const, deve ser inicializada com algum valor

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // Template String: String com valor dinamico

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (elemento) { // Funcao anonima, utilizada geralmente para variaveis constantes, no caso, utilizada para evitar que a funca  tocaSom seja inicializada ao atribuila
        if (elemento.code === 'Enter' || elemento.code === 'Space') {
            tecla.classList.add('ativa');
            tocaSom(idAudio);
        }
    }

    tecla.onkeyup = function () { // Funcao anonima, utilizada geralmente para variaveis constantes, no caso, utilizada para evitar que a funca  tocaSom seja inicializada ao atribuila
            tecla.classList.remove('ativa');
    }    

}
