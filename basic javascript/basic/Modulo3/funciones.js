function sumaTres(x){
    console.log(x + 3);
}
sumaTres(5);

//Función: sumaTres
var sumaTres1 = (x) => {
    return x + 3;
  }

  var sumaTres2 = function(x){
    return x + 3;
  }

  var sumaTres3= x



  function crearClasePersona() {
    class Persona {
      constructor(nombre, edad, hobbies, amigos) {
  
        // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
        // Inicializar las propiedades de la persona con los valores recibidos como argumento
  
        // Tu código aca:
  
        this.nombre = nombre;
        this.edad   = edad;
        this.hobbies= hobbies;
        this.amigos = amigos;
        this.persona = function(){
          return{
            nombre: this.nombre,
            edad: this.edad,
            hobbies: this.hobbies,
            amigos: this.amigos,
          }
        }
        
      }
      addFriend(nombre, edad) {
        var amigo = {nombre, edad}
        this.amigos.push({amigo});
   }


    };
  
    return Persona;
  }
  addFriend("SUSANA",22);
  
  