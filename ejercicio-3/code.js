'use strict';

//Escribir una función que reciba como parámetro una frase,
// separar por palabras y devolver en un array las palabras
// que tengan mas de 3 letras.
function separarWords(phrase){
    let words=phrase.split(" ");
    let wordFilter=words.filter(words=>words.length > 3);

    return wordFilter;
}

let phrase = 'La programación web es fundamental para el progreso';

alert(separarWords(phrase));