// EL ULTIMO EN ENTRAR ES EL ULTIMO EN SALIR
//bloqueante o no bloqueante es como toma la fase de espera
//sincrono o a sincrono cuando tendra a lugar la respuesta
//codigo sincrono bloquenate
//sincrono es como el presente espera el resultado en tiempo presente y sigue la operacion
//bloqueante no devuelve el control ala aplicacion hasta que alla teerminado su tarea

(()=>{
console.log("codigo sincronomo");
console.log("inicio");

function dos(){
    console.log("dos");
}
function uno(){
    console.log("uno");
    dos();
    console.log("tres");
}

uno();
console.log("fin");

})

//codigo asincrono no bloquenate 
// no bloqueante la operacion se ejecuta no importando si termina o no la tarea
//asincrona es como futuro se ejecuta pero no sabe cuando va a venir la respuesta
//por eso suelta el contro y lo pasa al hilo central
//codigo asincrono generalmente es no bloqueante


//con setTimeOut es un sistema de asincronismo porque tardara en ejecutarse segun el tiempo q le des

(()=>{

    console.log("codigo sincronomo");
    console.log("inicio");
    
    function dos(){
        setTimeout(function(){
            console.log("Dos");
        },1000);
    }
    function uno(){
      setTimeout(function(){
        console.log("uno")
      },0);// PASA ALA LISTA DE TAREAS AUNQUE NO TENGA TIEMPO  Y PRIMERO SE EJECUTAN LOS CONSOLE.LOG PORQUE TIENEN MAYOR PREFERENCIA
        dos();
        console.log("tres");
    }
    
    uno();
    console.log("fin");

})


//no bloqueantes son console.log en este ejemplo
// y las bloqueantes son los settimeout



//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// no sirve con arrow functions esa web





//x

//s





// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//    var x = 10;
//    console.log(x);
//    console.log(a);
//    var f = function (a, b, c) {
//       b = a;
//       console.log(b);
//       b = c;
//       var x = 5;
//    };
//    f(a, b, c);
//    console.log(b);
// };
// c(8, 9, 10);
// console.log(b);
// console.log(x);


function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();




//console.log(x)
//console.log(b)

//console.log(b)
//c(8,9,10)

//console.log(b)
//f(a,b,c)
//console.log(a)
//console.log(x)
//C(8,9,10)     pilazx

