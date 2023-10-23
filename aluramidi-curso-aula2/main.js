function iElementoAdudio () {
    document.querySelector('#som_tecla_pom').play();
}

let contador = 0;

const = listadeTeclasdocument.querySelectorAll('.tecla');


while (contador<<listadeTeclas.lenght) {
    const.instrumento = listadeTeclas[contador].classList[1];
    listadeTeclas[contador].onclick = tocaSom;
    contador = contador+1;
}
