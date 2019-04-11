let cont = 1;
let jogoAtivo = true;
let boot = true;
let c = 0;
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

const inserirImagem = (img, id) => {
    //console.log(id);
    document.getElementById(id).innerHTML = `<img src="./img/${img}.png">`;
    document.getElementById(id).setAttribute('onclick', '');
    let separa = id.split('_');
    tabuleiro[separa[0]][separa[1]] = img;
    if (verifica()) {
        document.getElementById('resultado').innerHTML = verifica();
        window.scrollTo(0,2000);
    }
}


function entrada(id) {
    cont ++;
    if (jogoAtivo) {
        if (cont % 2 == 0) {
            inserirImagem('x', id);
            if (boot) {
                inteligentao(id);
                cont ++;
            }
        } else {
            if (!boot) {
               inserirImagem('o', id);
            }
        }
    }
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
    } else if(cont == 10) {
        jogoAtivo = false;
        return `Deu velha! <img src='./img/palmirinha.jpg'>`
    }
}

function inteligentao(id) {
    let jogada = id.split('_');
    jogada = jogada.toString();
    console.log(jogada);
    verificadeira('a');
    c = 0;
    verificadeira('b');
    c = 0;
    verificadeira('c');
    c = 0;

}

const verificadeira = (indice) => {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[indice][i] == 'x') {
            c ++;
        } 
    }
    if (c == 2) {
        if (tabuleiro[indice]['1'] == 0) {
            inserirImagem("o", `${indice}_1`);
        } else if (tabuleiro[indice]['2'] == 0) {
            inserirImagem("o", `${indice}_2`);
        } else if (tabuleiro[indice]['3'] == 0) {
            inserirImagem("o", `${indice}_3`);
        }
    }
}
