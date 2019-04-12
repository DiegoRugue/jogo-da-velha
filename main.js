let cont = 1;
let jogoAtivo = true;
let boot = false;
let c = 0;
let para = false;
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

function setBot() {
    boot = true;
}

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
    para = false;
    let jogada = id.split('_');
    jogada = jogada.toString();
    console.log(jogada);
    // if (!para) {verificaDiagonal('o');}
    // if (!para) {verificaDiagonalSecundaria('o');}
    // if (!para) {verificaLinha('a', 'o');} 
    // if (!para) {verificaLinha('b', 'o');}
    // if (!para) {verificaLinha('c', 'o');}
    // if (!para) {verificaDiagonalSecundaria('x');}
    // if (!para) {verificaDiagonal('x');}
    // if (!para) {verificaLinha('a', 'x');}
    // if (!para) {verificaLinha('b', 'x');}
    // if (!para) {verificaLinha('c', 'x');}
    // if (!para) {verificaLinha('1', 'o');}
    // if (!para) {verificaLinha('2', 'o');}
    // if (!para) {verificaLinha('3', 'o');}
    // if (!para) {verificaLinha('1', 'x');}
    // if (!para) {verificaLinha('2', 'x');}
    // if (!para) {verificaLinha('3', 'x');}
    if (!para) {randown();}

}

const verificaLinha = (indice, img) => {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[indice][i] == img) {
            c ++;
        } 
    }
    console.log(c);
    if (c == 2) {
        if (tabuleiro[indice]['1'] == 0) {
            c = 0;
            inserirImagem('o', `${indice}_1`);
            return para = true;
        } else if (tabuleiro[indice]['2'] == 0) {
            c = 0;
            inserirImagem('o', `${indice}_2`);
            return para = true;
        } else if (tabuleiro[indice]['3'] == 0) {
            c = 0;
            inserirImagem('o', `${indice}_3`);
            return para = true;
        }
    }
}

const verificaColuna = (indice, img) => {
    let col = ['a','b','c'];
    let aux = 0;
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[col[i]][indice] == img) {
            c ++;
        } 
    }
    console.log(c);
    if (c == 2) {
        for (let i = 0; i < 3; i++) {
            if (tabuleiro[col[i]][indice] == 0) {
                aux = i;
            }
        }
        inserirImagem('o', indice[aux]);
        return para = true;
    }
        
}

const verificaDiagonal = (img) => {
    if (tabuleiro['a']['1'] == img) {
        c ++;
    }
    if (tabuleiro['b']['2'] == img) {
        c ++;
    }
    if (tabuleiro['c']['3'] == img) {
        c ++;
    }
    console.log(c);
    if (c == 2) {
        if (tabuleiro['a']['1'] == 0) {
            c = 0;
            inserirImagem('o', 'a_1');
            return para = true;
        } else if (tabuleiro['b']['2'] == 0) {
            c = 0;
            inserirImagem('o', 'b_2');
            return para = true;
        } else if (tabuleiro['c']['3'] == 0) {
            c = 0;
            inserirImagem('o', 'c_3');
            return para = true;
        }
    }
}

const verificaDiagonalSecundaria = (img) => {
    if (tabuleiro['a']['3'] == img) {
        c ++;
    }
    if (tabuleiro['b']['2'] == img) {
        c ++;
    }
    if (tabuleiro['c']['1'] == img) {
        c ++;
    }
    console.log(c);
    if (c == 2) {
        if (tabuleiro['a']['3'] == 0) {
            c = 0;
            inserirImagem('o', 'a_3');
            return para = true;
        } else if (tabuleiro['b']['2'] == 0) {
            c = 0;
            inserirImagem('o', 'b_2');
            return para = true;
        } else if (tabuleiro['c']['1'] == 0) {
            c = 0;
            inserirImagem('o', 'c_1');
            return para = true;
        }
    }
}

const randown = () => {
    let indice = ['a','b','c'];
    let aleatorio1 = Math.floor(Math.random() * 3);
    let aleatorio2 = Math.floor(Math.random() * 3);

    if (tabuleiro[indice[aleatorio1]][aleatorio2] == 0) {
        inserirImagem('o', `${indice[aleatorio1]}_${aleatorio2}`);
        return para = true;
    } else {
        randown();
    }
}


