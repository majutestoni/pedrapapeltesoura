const pedra = document.getElementById('pedra');
const palpel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const oponente = document.getElementById('oponente')

let jogada = '';
let jogadaOponente = '';

function gerarOponente() {
    if (oponente.target.value == "oponente") {
        let teste = Math.floor(Math.random() * 3 + 1)
        console.log(teste)

        if (teste == 1) {
            jogadaOponente = 'Pedra'
        
        } else if (teste == 2) {
            jogadaOponente = 'Papel'
        } else if (teste == 3) {
            jogadaOponente = 'Tesoura'
        }
    }
}

