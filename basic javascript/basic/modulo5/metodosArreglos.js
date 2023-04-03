var colores = ['amarillo','azul'];
colores.push('rojo');
console.log(colores);
colores.unshift('verde');
console.log(colores);
colores.pop();
console.log(colores);
colores.shift()
console.log(colores);


var pintores = ['Picasso','Van Gogh','Dali'];
var incluyeAlPintor = pintores.includes('Dali');
console.log(incluyeAlPintor);



var numeros= [8,7,6,8,20];
var masGrandeQueCinco= numeros.every((num) => {
    return num > 5 
}
)
console.log(masGrandeQueCinco);

var numerosTresdigitos= [23,200,300,500];
var todosTresDigitos= numerosTresdigitos.every((num1)=>{
    if(num1 > 99 && num1 < 1000 ){return true}
    else return false; 

})
console.log(todosTresDigitos);


var palabra='Henri';
var palabraSeparada= palabra.split('')
console.log(palabraSeparada);
palabraSeparada.pop();
console.log(palabraSeparada);
palabraSeparada.push('y');
console.log(palabraSeparada)
var palabraArreglada= palabraSeparada.join('');
console.log(palabraArreglada);


var numerosUnoAlCuatro = [1,2,3,4];
// numerosUnoAlCuatro.forEach((num)=>{ console.log(num)});
numerosUnoAlCuatro.forEach((num) =>{if(num === 3){console.log(num)}})
// realiza una accion pero no hace ningun cambio
// para hacer un cambio usamos map

var masUnoNumeros= [2,3,4,5,6,7,9]
var masUno= masUnoNumeros.map((num)=>{
    return num + 1;
})
console.log(masUno);

