
function OrdenarNumerosAlea(tamañoArreglo){
    var nuevoArreglo = new Array(tamañoArreglo);
    for(var i = 0; i < nuevoArreglo.length; i++){
        nuevoArreglo[i] = Math.ceil((Math.random()*100)+1);
        console.log(nuevoArreglo[i]);
        }
        for (var i = 0; i < nuevoArreglo.length; i++) {
            for (var j = 0; j < nuevoArreglo.length-1; j++) {
                if (nuevoArreglo[j] > nuevoArreglo[j + 1]) {
                    var temp = nuevoArreglo[j];
                    nuevoArreglo[j] = nuevoArreglo[j+1];
                    nuevoArreglo[j + 1] = temp;
                }
            }
           
        }
        console.log(nuevoArreglo);
}
OrdenarNumerosAlea(7);

