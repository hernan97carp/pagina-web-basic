
//Termina la ejecución de las sentencias de la iteración actual del bucle actual o la etiqueta 
//y continua la ejecución del bucle con la próxima iteración.




//En contraste con la sentencia break, continue no termina la ejecución del bucle por completo; en cambio,
//En un bucle while, salta de regreso a la condición.
//En un bucle for, salta a la expresión actualizada.



i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}
console.log(n);


let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  text += i + "<br>";}
  console.log(text);

  let text1 = "";
let a = 0;
while (a < 5) {
  a++;
  if (a === 3) continue;
  text1 += a + "<br>";
}
console.log(text1);

//La diferencia entre continuar y la instrucción break es que, en lugar de "saltar" de un bucle,
// la instrucción continuar "salta" una iteración en el bucle.




//En un bucle while , se prueba la condición y, si es verdadera, se vuelve a ejecutar el bucle.
//En un bucle for , primero se evalúa la expresión de incremento (por ejemplo, i++), y luego se prueba
// la condición para averiguar si se debe realizar otra iteración.
