let cont = 0;

function entrada(id) {
    let teste = document.getElementById(id);

    cont ++;

    if (cont % 2 == 0) {
        teste.innerHTML = '<img src="./img/X.jpg">'
    } else {
        teste.innerHTML = '<img src="./img/O.jpg">'
    }
    
}
