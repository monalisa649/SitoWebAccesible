function quickSort(arreglo){
    if (arreglo.length < 1){
        return [];
    }

var izq=[];
var der=[];
var pivote=[0];

for(var i = 1; i < arreglo.length; i++){
    if(arreglo[i] < pivote){
        izq=arreglo[i];

    }
    else{
        der=arreglo[i];
    }
}
 return [].concat(quickSort(izq), pivote, quickSort(der));


}

console.log(quickSort([3,6,8,9,5]));