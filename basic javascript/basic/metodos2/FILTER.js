// Es como una maquina q va tomando cada elemento de una array y va decidiendo si cada uno de ellos pasa al nuevo array
// si el elemento no cumple con cierta condicion entonces es descartado
// nosotros controlamos la funcion  de esa maquina
// esa funcion se le llama !!!predicado!!! una funcion que afirma o niega si un elemento cumple cierta condicion

const productos = [
    {id: 'ddddasdadassdsda', nombre: 'camiseta', precio: 770},
{id: 'ttttaaadassdsda', nombre: 'jean', precio: 1000},
{id: 'vaaass', nombre: 'gorra', precio: 500},

];
// nuestro predicado va a ser una funcionn... que dado un producto retornaremos si su precio es menor q 1000
// const productosBaratos = productos.filter(producto => producto.precio < 1000)


// mas facil de leer seria


const esBarato = producto => producto.precio < 1000;

const productosBaratos= productos.filter(esBarato);

const esCaro= producto => !esBarato(producto);

const productosCaros= productos.filter(esCaro); //para tenerlo en un array separado para tenerlo en otro lugar de nuestro sitio web

console.log(productosCaros)




const numeros=[1,2,3,4,3,1];//elemento, posicion, el array en si
const numerosUnicos= numeros.filter((numero, posicion, numeros)=>{
    return posicion === numeros.indexOf(numero); // indexof retorna la primera posicion donde encuentra al elemento
})



console.log(numerosUnicos)
//indexof  0 1 2 3 2 0 //aparece la posicion donde aparecen por primera vez
//numeros=[1,2,3,4,3,1]  
//posicion 0 1 2 3 4 5

// los primeros 4 son verdaderos los dos ultimos no

// ojo si comparamos con === en los objetos dentro de la array porque estariamos comparando referencias