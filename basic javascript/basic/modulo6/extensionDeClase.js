class Persona{
    constructor(nombre,edad){
        this.nombre= nombre;
        this.edad  = edad;


    }
   saludar(){
    console.log("Hola mucho gusto " + this.nombre+ ".Tu edad es de " + this.edad + " años");
   }

}

class Programador extends Persona{
    constructor(nombre,edad,añosDeExperiencia) {
        super(nombre,edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear(){
        console.log("Soy "+ this.nombre+ " tengo " + this.edad+" años" + ".Codeo hace mas de "+ this.añosDeExperiencia+ " años");
    }
} 
var martin = new Persona("Martin",20);
var maria = new Programador("Maria",25,4);
martin.saludar();
maria.codear();