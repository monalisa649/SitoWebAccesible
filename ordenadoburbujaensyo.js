

/*for(var j = nuevoArreglo.length; j > 0; j--){
    for(var i, k = 0; k< i-1; k++){
        //Ordenamiento ascendente
        if(nuevoArreglo[k]> nuevoArreglo[k+1]){
            var temporal = nuevoArreglo[k];
            nuevoArreglo[k] = nuevoArreglo[k+1];
            nuevoArreglo[k+1] = temporal;
            
        }
    }
    console.log(nuevoArreglo);
}*/

var nuevoArreglo= [34, 7, 9,15,-1];
for(var i=0; i<nuevoArreglo.length; i++){
    for(var j=0; j<nuevoArreglo.length-1; j++){
        if(nuevoArreglo[j]>nuevoArreglo[j+1]){
        var temp= nuevoArreglo[j];
        nuevoArreglo[j]=nuevoArreglo[j];
        nuevoArreglo[j+1]=temp;
        }
    }
    console.log(nuevoArreglo[i]);
}