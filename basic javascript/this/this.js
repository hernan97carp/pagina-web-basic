
//"this" hace referencia al scope donde se encuentra, al contexto donde se ejecuta
//las funciones anónimas crean scopes pero las arrow-functions no y éstas últimas se brincan al 
//scope superior para buscar la propiedad.
//siempre se refiere al dueño de la funci0N!!!!





// this.nombre = "contexto global";
// console.log(this.nombre);

// function imprimir(){
//     console.log(this.nombre);
// };
// imprimir();

// const obj = {
//     nombre: "contexto objeto",
//     imprimir: function(){
//         console.log(this.nombre)
//     }
// }
// obj.imprimir();

// const obj2= {
//     nombre: "contexto objeto 2",
//     imprimir
// }

// obj2.imprimir();

// const obj3= {
//     nombre: "contexto objeto 3",
// imprimir: ()=>{
//     console.log(this.nombre);
// }
// }

// obj3.imprimir();


// function Persona(nombre){
//     this.nombre = nombre;
// return function(){
//     console.log(this.nombre);
//   }
// }

// let jon = new Persona("jon");
// jon();




function getName(){
    console.log(this)
    console.log(`mi nombre es ${this.nick}`)
}



var tomas= {
    nick: "tomas",
    getName
}
tomas.getName()