const btn=document.querySelector('button');
const body=document.querySelector('body');

const colores =['blue','yellow','green','grey','white','pink','red','violet','orange','skyblue'];

btn.addEventListener('click',fondo);

function fondo(){
	var indice=parseInt(Math.random()*colores.length);
    switch(indice){
        case 0:	
        body.style.backgroundColor=colores[0];
		document.getElementById("color").innerHTML="EL COLOR ES AZUL";
        break;
        case 1:
        body.style.backgroundColor=colores[1];
		document.getElementById("color").innerHTML="EL COLOR ES AMARILLO";
        break;
        case 2:
        body.style.backgroundColor=colores[2];
		document.getElementById("color").innerHTML="EL COLOR ES VERDE";
        break;
        case 3:
        body.style.backgroundColor=colores[3];
		document.getElementById("color").innerHTML="EL COLOR ES GRIS";
        break;
        case 4:
        body.style.backgroundColor=colores[4];
		document.getElementById("color").innerHTML="EL COLOR ES BLANCO";
        break;
        case 5:
        body.style.backgroundColor=colores[5];
		document.getElementById("color").innerHTML="EL COLOR ES ROSADO";
        break;
		case 6:
		body.style.backgroundColor=colores[6];
		document.getElementById("color").innerHTML="EL COLOR ES ROJO";
		break;
		case 7:
		body.style.backgroundColor=colores[7];
		document.getElementById("color").innerHTML="EL COLOR ES VIOLETA";
		break;
		case 8:
		body.style.backgroundColor=colores[8];
		document.getElementById("color").innerHTML="EL COLOR ES ANARANJADO";
		break;
		case 9:
		body.style.backgroundColor=colores[9];
		document.getElementById("color").innerHTML="EL COLOR ES CELESTE";
		break;

    }
	

}
