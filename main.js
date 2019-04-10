let cont = 0;
let jogoAtivo = true;
let tabuleiro = Array(3);

tabuleiro['a'] = Array(3);
tabuleiro['b'] = Array(3);
tabuleiro['c'] = Array(3);

tabuleiro['a']['1'] = 0;
tabuleiro['a']['2'] = 0;
tabuleiro['a']['3'] = 0;

tabuleiro['b']['1'] = 0;
tabuleiro['b']['2'] = 0;
tabuleiro['b']['3'] = 0;

tabuleiro['c']['1'] = 0;
tabuleiro['c']['2'] = 0;
tabuleiro['c']['3'] = 0;

function entrada(id) {
    let teste = document.getElementById(id);

    cont ++;
    if (jogoAtivo) {
        if (cont % 2 == 0) {
            teste.innerHTML = '<img src="./img/x.png">';
            document.getElementById(id).setAttribute('onclick', '');
            let separa = id.split('_');
            tabuleiro[separa[0]][separa[1]] = 'x';
            if (verifica()) {
                document.getElementById('resultado').innerHTML = verifica();
                window.scrollTo(0,2000);
            }
        } else {
            teste.innerHTML = '<img src="./img/o.png">';
            document.getElementById(id).setAttribute('onclick', '');
            let separa = id.split('_');
            tabuleiro[separa[0]][separa[1]] = 'o';
            if (verifica()) {
                document.getElementById('resultado').innerHTML = verifica();
                window.scrollTo(0,2000);
            }
        }
    }
    console.log(tabuleiro);
}

function verifica() {
    if(tabuleiro['a']['1'] == 'x' &&
       tabuleiro['a']['2'] == 'x' &&
       tabuleiro['a']['3'] == 'x') {
           jogoAtivo = false;
           return "X é o vencedor";

    } else if (tabuleiro['a']['1'] == 'o' &&
               tabuleiro['a']['2'] == 'o' &&
               tabuleiro['a']['3'] == 'o') {
                jogoAtivo = false;
                return "O é o vencedor";

    } else if (tabuleiro['b']['1'] == 'x' &&
               tabuleiro['b']['2'] == 'x' &&
               tabuleiro['b']['3'] == 'x') {
                jogoAtivo = false;
                return "X é o vencedor";

    } else if(tabuleiro['b']['1'] == 'o' &&
              tabuleiro['b']['2'] == 'o' &&
              tabuleiro['b']['3'] == 'o') {
                jogoAtivo = false;
                return "O é o vencedor";

    } else if(tabuleiro['c']['1'] == 'x' &&
              tabuleiro['c']['2'] == 'x' &&
              tabuleiro['c']['3'] == 'x') {
                jogoAtivo = false;
                return "X é o vencedor";

    } else if(tabuleiro['c']['1'] == 'o' &&
              tabuleiro['c']['2'] == 'o' &&
              tabuleiro['c']['3'] == 'o') {
                jogoAtivo = false;
                return "O é o vencedor";

    } else if(tabuleiro['a']['1'] == 'x' &&
              tabuleiro['b']['1'] == 'x' &&
              tabuleiro['c']['1'] == 'x') {
                jogoAtivo = false;
                return "X é o vencedor";

    } else if(tabuleiro['a']['1'] == 'o' &&
              tabuleiro['b']['1'] == 'o' &&
              tabuleiro['c']['1'] == 'o') {
                jogoAtivo = false;
                return "O é o vencedor";

    } else if(tabuleiro['a']['2'] == 'x' &&
              tabuleiro['b']['2'] == 'x' &&
              tabuleiro['c']['2'] == 'x') {
                jogoAtivo = false;
                return "X é o vencedor";

    } else if(tabuleiro['a']['2'] == 'o' &&
              tabuleiro['b']['2'] == 'o' &&
              tabuleiro['c']['2'] == 'o') {
                jogoAtivo = false;
                return "O é o vencedor";

    } else if(tabuleiro['a']['3'] == 'x' &&
              tabuleiro['b']['3'] == 'x' &&
              tabuleiro['c']['3'] == 'x') {
                jogoAtivo = false;
                return "X é o vencedor";

    } else if(tabuleiro['a']['3'] == 'o' &&
              tabuleiro['b']['3'] == 'o' &&
              tabuleiro['c']['3'] == 'o') {
                jogoAtivo = false;
                return "O é o vencedor";

    } else if(tabuleiro['a']['1'] == 'x' &&
              tabuleiro['b']['2'] == 'x' &&
              tabuleiro['c']['3'] == 'x') {
                jogoAtivo = false;
                return "X é o vencedor";

    } else if(tabuleiro['a']['1'] == 'o' &&
              tabuleiro['b']['2'] == 'o' &&
              tabuleiro['c']['3'] == 'o') {
                jogoAtivo = false;
                return "O é o vencedor";

    } else if(tabuleiro['a']['3'] == 'x' &&
              tabuleiro['b']['2'] == 'x' &&
              tabuleiro['c']['1'] == 'x') {
                jogoAtivo = false;
                return "X é o vencedor";

    } else if(tabuleiro['a']['3'] == 'o' &&
              tabuleiro['b']['2'] == 'o' &&
              tabuleiro['c']['1'] == 'o') {
                jogoAtivo = false;
                return "O é o vencedor";
    } else if(cont == 9) {
        jogoAtivo = false;
        return `Deu velha! <img src='./img/palmirinha.jpg'>`
    }
}
