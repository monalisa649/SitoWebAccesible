function OrdenarNumerosAlea(tamañoArreglo){
    var nombreArreglo = new Array(tamañoArreglo);
    
    
    for(var i = 1; i < nombreArreglo.length; i++){
        nombreArreglo[i]; 
        var nuevoArreglo= nombreArreglo[i];
        nuevoArreglo= Math.ceil((Math.random()*100)+0);
        console.log(nuevoArreglo);
    }
    for(var j = nuevoArreglo.length; j > 0; j--){
        for(var k = 0; k< i-1; k++){
            //Ordenamiento ascendente
            if(nuevoArreglo[k]> nuevoArreglo[k+1]){
                var temporal = nuevoArreglo[k];
                nuevoArreglo[k] = nuevoArreglo[k+1];
                nuevoArreglo[k+1] = temporal;
                //console.log(nuevoArreglo);
            }
        }
    }
    console.log(temporal);
}

OrdenarNumerosAlea(6);



