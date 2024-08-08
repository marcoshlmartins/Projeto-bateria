let botao = document.querySelector('.botao');

function tocar(letraClicada) {
    letraClicada = letraClicada.toUpperCase();
    
    if ('QWERTASDZXC'.includes(letraClicada)) {
        audio.innerHTML = `<audio src="audios/key${letraClicada}.wav" id="audio"></audio>`;

        let rodar = document.getElementById('audio');

        mudarBorda(letraClicada);
        setTimeout(() => voltarBorda(letraClicada), 300);

        rodar.currentTime = 0;
        rodar.play();
    }
}

function playComposition(letraRecebida) {

       let wait = 0
    for (let i = 0; i < letraRecebida.length; i++) {
       setTimeout(() => {
              tocar(letraRecebida[i]);  
       }, wait);
       wait += 250;
    }

   
}

function mudarBorda(key) {
    let botao = document.querySelector(`#botao${key}`);

    if (botao) {
        botao.style.borderColor = 'orange';
    }
}

function voltarBorda(key) {
    let botao = document.querySelector(`#botao${key}`);

    if (botao) {
        botao.style.borderColor = 'white';
    }
}

let criar = document.querySelector('#tocar');

criar.addEventListener('click', criarComposicao);

function criarComposicao() {
    let input = document.querySelector('#criarComposicao').value;

    if (input != "") {
        playComposition(input.toUpperCase());
    } else {
        alert('Você não digitou nada, impossível criar uma composição.');
    }
}

let audio = document.querySelector('#som');

document.body.addEventListener('keydown', (event) => {
    tocar(event.key);
});
