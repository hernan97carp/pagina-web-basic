var arr= [1,2,3,4,5];
for(var i = 0; i < arr.length;i++){
    console.log(arr[i]);
}

function encontrarLetraP(string){
 var letras= string.split('');
 for(var i= 0;i<letras.length;i++){
    if(letras[i]=== "p"){
        console.log('Si contiene a p');
    }
 }
}
encontrarLetraP('estoyperdido');
encontrarLetraP('holaquetal');
// for se repite un numero determinado de repeticiones

var arr= [];
while(arr.length < 5){
    arr.push('Boom');
}
console.log(arr);
//while trabaja con condiciones especificas mientras la condicion se cumpla
//el bucle se repite