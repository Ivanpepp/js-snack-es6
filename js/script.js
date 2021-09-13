/* Snack 3 (i primi sarebbero quelli di ieri)
Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
Usiamo i nuovi metodi degli array forEach() o filter(). */




const arrayNuovo = [1,2,3,4,5,6,7,8,9,10];
let numeroMinimo = parseInt(prompt(`inserisci un numero da 0 ad ${arrayNuovo.length  -1 } ` ));
let numeroMassimo= parseInt(prompt(`inserisci un numero da ${numeroMinimo} ad ${arrayNuovo.length  -1 } ` ));
function snack(arr,num1,num2){
    const newArray = arr.filter((element,index) => index >= num1 && index <= num2);
    return newArray;
}

console.log(snack(arrayNuovo, numeroMinimo, numeroMassimo));