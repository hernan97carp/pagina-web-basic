







console.log(this);
this.lugar= "contexto Global";

function saludar(saludo,aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}
saludar("hola","kenai");
const obj= {
    lugar: "contexto objeto"
}
saludar.apply(obj,["adios","Mircha"])
saludar.apply(null,["adios","Mircha"]);
saludar.apply(this,["adios","Mircha"])

















const user= {
    name: 'marcos'
};
const business= {
    name:'headbook'
};
function showInfo(likes,friends){
    return `${this.name} tiene ${likes} likes y ${friends} amigos`
}
console.log(showInfo.apply(business,[32,20]))

