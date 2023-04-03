
// funcion constructora
function Auto(marca,color,puertas,año,ruedas){
    this.marca = marca;
    this.color = color;
    this.puertas= puertas;
    this.año   = año;
    this.ruedas=ruedas;
    this.info  = function(){
        console.log("Este es un auto de la marca "+ this.marca + "de color " + this.color );
    }
};
var miPrimerAuto= new Auto("Chervolet","Verde",4,2020,4);
console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);
miPrimerAuto.info();


// expresion de clase
class Animal{
  constructor(especie,edad,color){
    this.especie= especie;
    this.edad   = edad;
    this.color  = color;

  }
  informacionDelAnimal(){
    console.log("Es de especie "+ this.especie + ".Tiene una edad de "+ this.edad + " años")
  };

}
var primerAnimal = new Animal("Carnivoro",4,"Naranja");

console.log(primerAnimal);
console.log(primerAnimal.edad);
primerAnimal.informacionDelAnimal();

class Fotball{
    constructor(jugador){
        this.jugador= jugador;

    }
    obtenerNombre(){
        console.log("Su nombre es " +this.jugador);
    };
}

var Argentina = new Fotball("Messi");
var Brasil    = new Fotball("Neymar");
console.log(Argentina);
console.log(Brasil);
Argentina.obtenerNombre();
Brasil.obtenerNombre();