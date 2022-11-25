var Diccionario = ({
    A:'Sony',
    B:'Riot Games',
    C:'Sega'
});

var llaves = Object.keys(Diccionario);
var kes=[]
var values=[]
var total=[]

for(var i=0; i<llaves.length; i++){
    var llave = llaves[i];
    kes.push(llaves[i])
    values.push(Diccionario[llave])
    if(llaves.length===i+1){
        total.push(kes)
        total.push(values)
    }
}

console.log(total)

 
    

   

    

    

