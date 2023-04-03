console.log(this);
this.lugar= "contexto Global";

function saludar(saludo,aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}
saludar("hola","kenai");
const obj= {
    lugar: "contexto objeto"
}

saludar.call(obj,"hola","jon");// si en vez de obj es null va al contexto global//en vez de contexto global me dio  el contexto de obj
saludar.call(null,"Hola","jon");
saludar.call(this,"hola","jon")










let personas= {
    nombre: "alex",
    apellido:"bris"
}
let logNombre= function(saludito,trabajo){
    console.log(`${saludito} ${this.nombre} trabajas de ${trabajo}`)//undefined en ese contexto por eso bind
}
//bind retorna una funcion es como una clousets 
//necesito guardarla en una variable
//logNombre()
let LogNombrePersona = logNombre.bind(personas)
LogNombrePersona();
logNombre.call(personas,"hola","programador")



















const user= {
    name: 'marcos'
};
const business= {
    name:'headbook'
};
function showInfo(likes,friends){
    return `${this.name} tiene ${likes} likes y ${friends}`
}

console.log(showInfo.call(user,4,8))

