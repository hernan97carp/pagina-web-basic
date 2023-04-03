Array.prototype.mayoresQueTres = function(){
  var arregloModificado= [];
  for(let i = 0; i< this.length; i++){
    if(this[i] > 3){              // this equivale al arreglo q esta invocando nuestro metodo
        arregloModificado.push(false);
    }
    else {
        arregloModificado.push(this[i]);
    }
  }
  return arregloModificado;

}

var arreglo= [1,2,3,4,5,6];
var nuevoArreglo= arreglo.mayoresQueTres();
console.log(nuevoArreglo);


class LatinoAmerica{
    constructor(){
        this.paises= [];

    }
}
LatinoAmerica.prototype.agregarPaises = function (pais){ //agregar paises es el nombre del metodo
    this.paises.push(pais);

}
var continente =new LatinoAmerica();
continente.agregarPaises("Mexico");
console.log(continente.paises);