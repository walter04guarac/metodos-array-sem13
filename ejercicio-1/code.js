'use  strict';

//Escribir una función que reciba como parámetros un array 
//de nombres y un nombre a buscar, muestre en pantalla si
// el nombre esta en lista o no.
function searchName(list,name){
    if(list.includes(name)) {
        alert(`Este nombre${" "+namesearch} si se encuentra`)
    } else{
        alert(`Este nombre${" "+namesearch} no se encuentra`)
    }
}

let students=["Juan","Jose","Pedro","Maria","Alejandra"];
let namesearch="Pedro"

searchName(students, name);