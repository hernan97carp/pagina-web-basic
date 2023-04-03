// solo va hacer un recorrido de mi arreglo no me va aregresar ningun valor ningun arreglo 
// si queremos recorrer un arreglo para hacer una operacion dentro de ella sin la necesidad de regresar un arreglo o un valor especifico la podemos utilizar

let arreglo=[2,4,6,8,10,12];

for(let i = 0; i < arreglo.length; i++){
    var item = arreglo[i];
    var index= i;
console.log(item, index);
}

// arreglo.forEach(function(item,index){
//     console.log(item,index);
// })
arreglo.forEach((item,index)=>{console.log(item, index);
})// o con funcion anonima



