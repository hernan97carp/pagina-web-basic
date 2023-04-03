

//primer parametro de bind es donde queremos q apunte el this...
// si el this no esta:
// si o si hay q pasarle algo lo que queramos  podemos ponerle cualquier cosa porque el parametro
// de bind el primero deber estar ej "pepito",null


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
let LogNombrePersona = logNombre.bind(personas,"hola","programador")
LogNombrePersona();














var fullName= 'carlos cabrera';

var person= {
    other:{
        fullName:'miguel hidalgo'
    },
    fullName: 'francisco villa',
    getFullName: function(){
        return this.fullName
    }
}
var getFullName= person.getFullName.bind(person.other)
console.log(getFullName());











const user= {
    name: 'marcos'
};
const business= {
    name:'headbook'
};
function showInfo(likes,friends){
    return `${this.name} tiene ${likes} likes y ${friends}`
}
console.log(showInfo.apply(business,[20,30]))

const newfunction = showInfo.bind(user);

console.log(newfunction(10,15));








this.nombre= "windows"
const persona= {
    nombre:"jon",
    saludar: function(){
        console.log(`Hola ${this.nombre}`)
    }
}

persona.saludar()


const otraPersona= {
    saludar: persona.saludar.bind(persona)// si lo cambio por this da al objeto global string que dice "windows"
}
otraPersona.saludar();


