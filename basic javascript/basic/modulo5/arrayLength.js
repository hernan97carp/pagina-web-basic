//array.length - 1  es al acceder al último elemento, por ejemplo, para encontrar el número más grande en una matriz:
//oldArray.length-1es necesario cuando desea ese elemento en particular, es decir , el elemento final de la matriz.

//es decir   
//oldArray[oldArray.length-1]



//Se usa cuando desea obtener el último número de índice de la matriz.
 //Ve que la computadora no sabe cuánto tiempo es su matriz, 
//obtiene la indicación usando -1. Visto 0 es el comienzo, luego -1 es el final de la matriz.

var array= ["pepe","arturo","lucas","pedro"]
for (var i = 0; i < array.length - 1; i++) {


  console.log(array[i])
    // this will loop throw the entire array
 }
//si desea acceder a un elemento de la matriz, debe usar array.length-1

 //lastElement = array.length -1;