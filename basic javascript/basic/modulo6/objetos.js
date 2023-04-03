var deportes= {
   conBalon: ["basquet", "futbol", "voley" ],
   sinBalon: ["correr","natacion","surf"],
};


var persona= { nombre:"Lucas",edad: 28, estudios: {esProgramador:true}};
console.log(deportes.sinBalon)
console.log(deportes["sinBalon"])


var misFunciones= {
   saludar: function(){
      console.log("Hola locoooooooooooooooooo");
   },
};
misFunciones.saludar();




// ACCEDER
console.log(persona.edad);
persona.nombre = 'Martín';
console.log(persona.nombre);
console.log(persona)
console.log(persona["nombre"])

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);



autos.cuatroPorCuatro =["Ford","Ranger"];
console.log(autos.cuatroPorCuatro);
delete autos.marcas;
console.log(autos);
//DOT NOTATION
var atuendos = {manos:['guantes','anillos'],pies:['zapatos','soquetes']
};
console.log(atuendos.manos);

//BRACKET NOTATION
atuendos['piernas'] = ['bermudas','jean'];
console.log(atuendos);


var comidas ={};
var diferenciasDeNotaciones = function(propUno,propDos){
   comidas.propUno = ['frutas','vegetales'];// forma incorrecta de hacer
   comidas[propDos]= ['pizza','empanadas']; // forma correcta de hacer con brock notation pero sin comillas

};
diferenciasDeNotaciones('saludable','NoSaludable');
console.log(comidas);
// para variable externa  para guardarla como propiedad en un objeto
// hay q usar siempre brock notation sin comillas.....


let libro= {autor:'Borges', genero:'Policial',año:'1998'};
let tieneComoPropiedad= libro.hasOwnProperty('autor');
console.log(tieneComoPropiedad);


let todasLasPropiedades= Object.keys(libro);
console.log(todasLasPropiedades);

var mundo = {continentes: 7, paises:195, oceanos:5 };
for(var prop in mundo){
   console.log('Esta es la propiedad: ' + prop);
   console.log('Este es el valor: ' + mundo[prop]);
}


var mascota= {
   animal: 'perro',
   raza: 'ovejero aleman',
   amistoso: true,
   dueño:'Hernan',
   info: function(){
      console.log('Mi perro es un ' + this.raza); // con this reconoce el contexto con el que le hacemos referencia es un objeto
   }
}
mascota.info()