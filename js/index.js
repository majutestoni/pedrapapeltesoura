const pedra = document.getElementById('pedra');
const palpel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const oponente = document.getElementById('oponente')
const escolhas = document.getElementsByTagName('input');


let jogada = '';
let jogadaOponente = '';

for (let i = 0; i < 3; i++) {
    if (jogada == '') {
        escolhas[i].addEventListener('click', (evento) => {
            jogada = evento.target.value;
            console.log(jogada)
        })
    }
}
function gerarOponente() {

    oponente.addEventListener('click', (event) => {
        let teste = Math.floor(Math.random() * 3 + 1)
        if (event.target.value == "oponente") {
            if (jogadaOponente == '') {
                if (teste == 1) {
                    jogadaOponente = 'Pedra'
                } else if (teste == 2) {
                    jogadaOponente = 'Papel'
                } else if (teste == 3) {
                    jogadaOponente = 'Tesoura'
                }
            }
            event.target.value = jogadaOponente;
        }
    })
    ganhador();
}


function ganhador() {

    if (jogada != '' && jogadaOponente != '') {
        switch (jogadaOponente) {
            case 'Pedra':
                if (jogada != 'Pedra' && jogada != 'Papel') {
                    window.alert('oponente ganhou')
                } else if (jogada != 'Pedra') {
                    window.alert('voce ganhou')
                } else {
                    window.alert('empate')
                }
                break;
            case 'Papel':
                if (jogada != 'Pedra' && jogada != 'Papel') {
                    window.alert('voce ganhou')
                } else if (jogada != 'Pedra') {
                    window.alert('empate')
                } else {
                    window.alert('oponente ganhou')
                }
                break;
            case 'Tesoura':
                if (jogada != 'Pedra' && jogada != 'Papel') {
                    window.alert('empate')
                } else if (jogada != 'Pedra') {
                    window.alert('voce ganhou')
                } else {
                    window.alert('oponente ganhou')
                }
                break;
        }
    }
}

