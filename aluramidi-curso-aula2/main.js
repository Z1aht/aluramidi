function iElementoAdudio () {
    document.querySelector('#som_tecla_pom').play();
}

let contador = 0;

const = listadeTeclasdocument.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTecla.lenght; contador++) {

    const.instrumento = listadeTeclas[contador].classList[1];
    listadeTeclas[contador].onclick = tocaSom;
    contador = contador+1;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onKeydown = function(evento){

        if(evento.code == 'Enter')
        tecla.classlist.add('ativa')
        }
        }

    tecla.onkeyup(){
        tecla.classlist.remove('ativa')
        }
}