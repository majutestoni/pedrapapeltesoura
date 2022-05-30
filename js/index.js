const oponente = document.getElementById('oponente')
const escolhas = document.getElementsByTagName('input');


let jogada = '';
let jogadaOponente = '';

for (let i = 0; i < 3; i++) {
    escolhas[i].addEventListener('click', (evento) => {
        if (jogada == '') {
            jogada = evento.target.value;
            escolhas[i].style.backgroundColor = '#D2691E';
        }
        ganhador();
    })
}

function gerarOponente() {

    let teste = Math.floor(Math.random() * 3 + 1)
    oponente.addEventListener('click', (event) => {
        if (event.target.value == 'oponente') {
            if (teste == 1) {
                jogadaOponente = 'pedra'
            } else if (teste == 2) {
                jogadaOponente = 'papel'
            } else if (teste == 3) {
                jogadaOponente = 'tesoura'
            }

            event.target.value = jogadaOponente;
            ganhador();
        }
    })

}


function ganhador() {

    if (jogada != '' && jogadaOponente != '') {

        console.log(jogada)
        console.log(jogadaOponente)

        if (jogada == 'Tesoura' && jogadaOponente == 'pedra') {
            window.alert('oponente ganhou')
        } else if (jogada == 'Papel' && jogadaOponente == 'pedra') {
            window.alert('voce ganhou')
        } else if (jogada == 'Pedra' && jogadaOponente == 'pedra') {
            window.alert('empate')
        }


        if (jogada == 'Tesoura' && jogadaOponente == 'papel') {
            window.alert('voce ganhou')
        } else if (jogada == 'Papel' && jogadaOponente == 'papel') {
            window.alert('empate')
        } else if (jogada == 'Pedra' && jogadaOponente == 'papel') {
            window.alert('oponente ganhou')
        }


        if (jogada == 'Tesoura' && jogadaOponente == 'tesoura') {
            window.alert('empate')
        } else if (jogada == 'Papel' && jogadaOponente == 'tesoura') {
            window.alert('oponente ganhou')
        } else if (jogada == 'Pedra' && jogadaOponente == 'tesoura') {
            window.alert('voce ganhou')
        }

    }
}


