
// //TYPEOF
// // typeof 62 === 'number'
// //TRUE
// // El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo. 
// // operando es la cadena, variable,
// //  palabra clave u objeto para el que se devolverá su tipo. 
// //  Los paréntesis son opcionales.
// var miFuncion = new Function("5+2")
// var forma = "redonda"
// var tamano = 1
// var hoy = new Date()
// typeof miFuncion === 'function'
// typeof forma === 'string'
// typeof tamano === 'number'
// typeof hoy === 'object'
// typeof noExiste === 'undefined'
// typeof 62 === 'number'
// typeof 'Hola mundo' === 'string'
// ;


// var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
// // total == 6
// console.log(total)


// var integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
//     return a.concat(b);
//   });
//   // integrado es [0, 1, 2, 3, 4, 5]
//   console.log(integrado);
//   const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));
// // Expected output: "Hello World"

// console.log(str2.concat(', ', str1));
// // Expected output: "World, Hello"

// var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
// console.log(elvisLives)



// var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
// function buscarAmigo(amigos, nombre) {
//   // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
//   // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
//   // recibe un string llamado 'nombre'.
//   // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
//   // Ej:
//   //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
//   //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

//   // Tu código aca:
//   for (let i = 0; i < amigos.length; i++) {
//     if (nombre === amigos[i].nombre) {
//       return amigos[i];
//     }
// }
// return null;

//   // var i = 0;
//   // // Mientras queden elementos por comprobar en el array y el nombre del elemento actual no sea el nombre que buscamos, pasamos al elemento siguiente
//   // while (i < amigos.length && amigos[i].nombre != nombre) {
//   //   i++;
//   // }
//   // // Si el motivo por el que se ha salido del array es porque no quedan elementos por comprobar devolver null (no se ha encontrado). En caso contrario devolver el elemento en la posición i (posición en la que se ha encontrado ele lemento)
//   // if (i < amigos.length) {
//   //   return amigos[i];
//   // }
//   // else {
//   //   return null;
//   // }
  
// }
// console.log(buscarAmigo(amigos,"toni"))
// console.log(buscarAmigo(amigos, "pedro"))
// var numero= 0
// while(numero <= 10){
//   console.log(numero)
//    numero++;
   
   
// }
// var dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
// var i= 0
// var numerosDeDias= dias.length -1;
// while(i < dias.length ){
//   console.log(dias[i]);
//   i++;
// }
//frase = frase.slice(0, frase.length - 1);
var dias=['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
var frase= "";
for(dia of dias){
  frase+= `${dia} `;
}
console.log(frase)