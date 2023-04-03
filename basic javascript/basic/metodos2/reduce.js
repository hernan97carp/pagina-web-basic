// es como una prensa  esta prensa necesita una array y un valor inicial q le tenemos q indicar nosotros

// 0   con cada vuelta de la palanca
// 3    opera con el valor que va acumulando con cada elemento de la array
// 10
// 20
// 50
// desp de operar con todos los elementos de la array obtenemos un unico valor como resultado
// 83 [resultado]

// se podria haber llamado reduce como ACUMULAR  PERO NO SE LLAMA REDUCE
// REDUCIMOS LA ARRAY ORIGINAL A UN UNICO VALOR
// lo que escribimos nosotros es la funcion reductora

// const numeroos= [3,10,20,50];

// el primer parametro es la funcion reductora que va ir actualizando el acumulador
// el segundo parametro es el valor incial del acumulador... que en este caso es 0 osea que ese es el valor que tiene la maquina justo al accionar la palanca
// luego viene el elemento actual(numero)
// tambien se puede acceder ala posicion del elemento dentro de la array (acumulador,numero,posicion,numeros)


// let total= numeroos.reduce((acumulador,numero)=>{
// return acumulador + numero; 
// o escribrir asi let total= numeros.reduce((acumulador,numero)=> acumulador + numero,0);


// debemos retonar el valor de la acumuladora actualizado
// // estamos retornando que nuevo valor va a tener el acumulador desp de girar la palanca
// },0)

// const acumular= (acumulador, numero)=> acumulador + numero;
// let total= numeros.reduce(acumular,0);


// ejecutar para saber si tiene elementos..
//let total= numeros.length > 0? numeros.reduce(acumular) : 0;

// apartir de una array podemos tener un numero objeto o array
// podemos incluso escribir map o filter utilizando reduce
// el valor incial es un parametro opcional
// sino lo ponemos reduce va a tomar el primer elemento de la array como valor inicial y va a empezar acumular desde el segundo elemento

// como queremos tener un nuevo array como resultado nuestro valor inicial sera um nuevo array vacio[]

// de esa manera nuestra funcion acumuladora va a recibir un array como acumulador
// y desp cada elemento de la array original

// const acumularDobles= (acumulador, numero)=>{
//      acumulador.push(numero * 2);
//      return acumulador;
// };



// push modifica el acumulador muta las funcioones puras en vez de eso usa
const numeros= [71,41,19,88,3,65];
const acumularDobles= (acumulador, numero)=>[...acumulador, numero *2];

const dobles =numeros.reduce(acumularDobles,[]);
console.log(numeros);
console.log(dobles);






//ejemplo de como usar los tres map filter reduce


const productos = [
    {id: 'ddddasdadassdsda', nombre: 'camiseta', precio: 770},
{id: 'ttttaaadassdsda', nombre: 'jean', precio: 1000},
{id: 'vaaass', nombre: 'gorra', precio: 500},

];

const precioTotalProductosBaratos= productos.filter(esBarato).map(obtenerPrecio).reduce(acumular);
// filtramos eso va a devolver una array al cual podemos encadenar con un llamado a map  para transformarlo en una array
// de precio nada mas
// y por ultimo reducirlo para sumar cuanto suman sus precios en la funcion acumulada