// usamos map cuando tenemos un array y queremos obtener un nuevo array
// es  como una maquina que transforma los elementos  de una array uno por uno
// aplicandoles a cada  uno una funcion en base al elemento en cuestion y su pocision en la array
//esa funcion la indicamos nosotros dependiendo que queremos hacer

// var numeros= [3,10,20,50];
// var dobles = numeros.map(function(numero,posicion){

//});

// map recibe como primer parametro la funcion transformadora... la q se va estar invocando por cada 
// elemento de la array (function())
// esta funcion recibe como parametro asu vez
//1ro el elemento de la array que va atransformar    (numero,)
//2do parametro la posicion de ese  elemento dentro de la array (posicion)
// (function(numero,posicion){})








// esta funcion debe transformar el nuevo valor transformado

var numeros= [3,10,20,50];
var dobles = numeros.map(function(numero){
    return numero * 2;

});
console.log(dobles);

// no se puede ejecutar operaciones asincronas o esperar el resultado de un call back
// tiene q ser sincrono si o si


// no se debe modificar la array original con map



// si solo queremos la posicion ignoramos el primer parametro con un _
//(_,posicion)





var personas= ["juan","pedro","lucas"];
var misAmigos= personas.map(function(elemento){
    return `mis amigos son ${elemento}`
})
console.log(misAmigos);


var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);  //retorna la raíz cuadrada de un número,
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
console.log(roots);


//El siguiente código itera sobre un array de números, aplicándoles la raíz cuadrada a cada uno de sus elementos, 
//produciendo un nuevo array a partir del inicial.

var numer= [1, 4, 9,];
var raices = numer.map(Math.sqrt);
// raices tiene [1, 2, 3]
// numeros aún mantiene [1, 4, 9]
console.log(raices);
console.log(numer);



const productos = [
    {id: 'ddddasdadassdsda', nombre: 'camiseta', precio: 770},
{id: 'ttttaaadassdsda', nombre: 'jean', precio: 1000},
{id: 'vaaass', nombre: 'gorra', precio: 500},

];
// const productosConDescuento = productos.map(function(productos){
//     if(productos.precio < 600){ // o escribir asi  if(productos.precio < 1000)return productos;
//         return productos;
//    //retorno temprano se llama nos sacamos de encima el caso q no nos interesa--- 
//     }
//   // productos.precio= productos.precio * 0.9; ESTA MAL PORQUE ESTAMOS MODIFICANDO LA ARRAY ORIGINAL



// })

const productosConDescuento = productos.map(function(productos){
    if(productos.precio < 600)return productos;
    return {// retornamos un nuevo objeto 
       ...productos,// donde vamos a retornar las propiedades del objeto original 
        precio: productos.precio * 0.9// pero vamos a pisarle el precio para que tenga el descuento correspondiente
    }
// este es un objeto totalmente nuevo
// copiandolo del objeto original


})
console.log(productosConDescuento)

// diferentes formas de retomar el id


//const idProductos =productos.map(function(producto){
// return producto.id;   // retorna el id de cada producto
//})


//const idProductos =productos.map((producto)=>{
// return producto.id;   // retorna el id de cada producto
//})


//const idProductos =productos.map(producto=>{
// return producto.id;  como es solo un parametro  podemos borrar los parentesis
//})




//const idProductos =productos.map(producto=> productos.id);  como solo tiene una instruccion de retorno---

const idProductos= productos.map(({id})=> id); // obtenemos solo el parametro de id que nos llegue y retornamos solo esa propiedad
console.log(idProductos)
// desarmamos el parametro y ponemos los parentesis para obtener su parametro id {id}
// con eso estamos extrayendo un valor de los elementos de una array



let arr = ['juan','marcos','lea','sergio'];
let result = [];
for(let index = 0; index < arr.length;index++){
    const item=  arr[index];
    result.push(`<div>${item}</div>`);
}
console.log(result);


let result2= arr.map((item,index)=>{
    return `<div>${item}</div>`
})
console.log(result2);
console.log(arr)