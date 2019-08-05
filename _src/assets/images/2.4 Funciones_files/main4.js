'use strict';

// EJERCICIO 1
// Función multiplicación
// Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().

// function multiply(a, b) {
//   const result = a * b;
//   return result;
// }

// const multiResult = multiply(3, 4);

// console.log(multiply(1, 4));
// console.log(multiply(2, 4));
// console.log(multiply(3, 4));

// EJERCICIO 2
// Función media
// Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

// function media(a, b, c, d) {
//   let result = (a + b + c + d) / 4;
//   return result;
// }

// let mediaResult = media(5, 5, 5, 5);

// console.log('La media es:', mediaResult);

// EJERCICIO 3
// Ticket con IVA
// Crea una función que reciba por parámetro un número, que representará un precio, y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total. Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola para comprobarlo.


// const precio = 25;
// let iva = 0.21;
// function calculateIva(a, b) {
//   a = 1 + a;
//   let result = a * b;
//   return result;
// }

// const total = calculateIva(iva, precio);

// console.log(`Precio sin IVA: ${precio} IVA: ${precio * iva} y Total: ${total}`);

// EJERCICIO 4
// Pares o nones
// Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
// Ejecutala e imprime el resultado para comprobar que funciona.

// function pair(number) {
//   const resultToF = number % 2 === 0;
//   return resultToF;
// }

// const resultToF = pair(5);

// console.log(resultToF);

// EJERCICIO 5
// querySelector para todas

function getEl(classEl) {
  return document.querySelector(classEl);
}

const btnEl = getEl(".all");
console.log(btnEl);

