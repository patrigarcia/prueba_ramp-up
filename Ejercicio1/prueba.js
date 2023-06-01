/*

Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase:
-----------------------------------------------------------------------------------------

1) Pido al usuario que ingrese una frase.

2) Le pido al usuario que ingrese la letra a contar en la frase.

3) Declaro un contador en 0 (variable) para que cuente las veces que aparece la letra.

4) Vuelvo todas las letras de la frase a minúsculas.

5) Recorro la frase letra por letra.

6) Comparo cada letra de la lista con la letra que se quiere contar, si coinciden entonces incremento el contador en 1.

7) Cuando termina de recorrer la frase, se muestra por pantalla un mensaje con el resultado del contador, que será

la cantidad de veces que aparece la letra en la frase.

Fin.
*/

function contarLasLetras(frase, letra) {
  let contador = 0;

  frase = frase.toLowerCase();

  for (let i = 0; i < frase.length; i++) {
    let caracter = frase[i];

    if (caracter === letra) {
      contador++;
    }
  }

  return contador;
}

let frase = prompt("Ingrese una frase:");
let letra = prompt("Ingrese la letra a contar:");
let resultado = contarLasLetras(frase, letra);
console.log(
  `La letra '${letra}' aparece ${resultado} veces en la frase ingresada.`
);
