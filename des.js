
function newFunction() {
    var nuevoArreglo = [34, 7, 9, 15, -1];
    console.log(nuevoArreglo);
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

newFunction();
