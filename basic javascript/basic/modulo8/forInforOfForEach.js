var colores =["azul","rojo","verde"];
colores.map((elemento,index)=>{
    console.log(`${elemento} => ${index}`)
});

for(var i of colores){
    console.log(i);
}






let iterable = [1,2,"mate",3,5,6]

for (let value in iterable) {
  console.log(value);
}

// el parametro elemento se refiere al elemento que esta dentro del arreglo osea 1 ,2,3,4,5,6
// osea va a iterar en cada uno de los elementos
let arreglo= [1,2,3,4,5,6,];
let nuevoArreglo= [];
// map solo sirve para los arreglos
nuevoArreglo= arreglo.map((elemento)=> elemento*10);
console.log(arreglo);
console.log(nuevoArreglo);


colores.forEach(elemento=>{console.log(elemento)});


var arr= ['a','b','z','e'];
arr.forEach(function(element,index,arreglo)
{
  console.log(element);
  console.log(index);
  console.log(arreglo);
})