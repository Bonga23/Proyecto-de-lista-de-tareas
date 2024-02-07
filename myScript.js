let inputTarea=document.getElementById('tarea');

let btn=document.getElementById('botonAgregar');

let lista=document.getElementById('listaDeTareas');

let contador=document.getElementById('contadorTareasTotales');

let contadorTotal=document.getElementById('tareasTerminadas');

let tareasFaltantes=document.getElementById("tareasFaltantes");

btn.addEventListener('click',agregar);

let contadorTareas=0;

let tareasTerminadas=0;

let faltantes=0;


function agregar() {
    if(inputTarea.value){
    let elementoTarea=document.createElement('div');
    elementoTarea.classList.add("estiloTarea");
    
   

    let texto=document.createElement('p');
    texto.innerText=inputTarea.value;
    
    elementoTarea.appendChild(texto);
    lista.appendChild(elementoTarea);

    //iconos
    
    let iconos=document.createElement('div');
    elementoTarea.appendChild(iconos);


    let iconolisto=document.createElement("i");
    iconolisto.classList.add("bi","bi-check-square-fill","listo");

    iconos.appendChild(iconolisto);

    //ico


    let iconoX=document.createElement("i");
    iconoX.classList.add("bi","bi-x-square-fill","eliminar")

    iconos.appendChild(iconoX);

    //icons eventos con click

    iconoX.addEventListener('click',eliminarTarea)
    iconolisto.addEventListener('click',marcarTerminada)

    contadorTotal.innerText =tareasTerminadas+=1;

    tareasFaltantes.innerText=faltantes+=1;


    }else{
        alert("no se lleno nada");
    }
}

function eliminarTarea(e){
let eliminarElemento=e.target.parentNode.parentNode;
eliminarElemento.remove();
contador.innerText = contadorTareas-=1;
contadorTotal.innerText=tareasTerminadas-=1;

tareasFaltantes.innerText=faltantes-=1;
}

function marcarTerminada(e){
let elementoListo=e.target.parentNode.parentNode;
elementoListo.classList.add("terminado");
contador.innerText =contadorTareas+=1;

}

