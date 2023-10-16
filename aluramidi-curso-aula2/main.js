function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const = listadeTeclasdocument.querySelectorAll('.tecla');


while (contador<9) {
    listadeTeclas[contador].onclick = tocaSomPom;
    contador = contador+1;
}
