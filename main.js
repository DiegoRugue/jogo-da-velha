let cont = 0;
let tabuleiro = [];

tabuleiro['a'][1] = 0;
tabuleiro['a'][2] = 0;
tabuleiro['a'][3] = 0;

tabuleiro['b'][1] = 0;
tabuleiro['b'][2] = 0;
tabuleiro['b'][3] = 0;

tabuleiro['c'][1] = 0;
tabuleiro['c'][2] = 0;
tabuleiro['c'][3] = 0;

function entrada(id) {
    let teste = document.getElementById(id);

    cont ++;

    if (cont % 2 == 0) {
        teste.innerHTML = '<img src="./img/o.png">'
    } else {
        teste.innerHTML = '<img src="./img/x.png">'
    }
    
}
