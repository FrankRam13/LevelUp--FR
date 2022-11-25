
// Se declara la variable 
var counterVal = 0;


// FUNCION PARA INCREMENTAR EL CONTADOR AL HACER CLICK

function incrementClick() {
    actualizar(++counterVal);
    if(counterVal>0){
    document.getElementById("counter-label").style.color='green';
    }else{

    }
    
}


// FUNCION PARA RESETEAR EL CONTADOR AL HACER CLICK

function resetCounter() {
    counterVal = 0;
    actualizar(counterVal);
    if(counterVal==0){
        document.getElementById("counter-label").style.color='black';
    }
}

// FUNCION PARA ACTUALIZAR EL CONTADOR

function actualizar(val) {
    document.getElementById("counter-label").innerHTML = val;
}


// FUNCION PARA DISMINUIR EL CONTADOR

function disminuircounter(){
    actualizar(--counterVal);
    if(counterVal>0){

    }else{
    document.getElementById("counter-label").style.color='red';
    }
}   