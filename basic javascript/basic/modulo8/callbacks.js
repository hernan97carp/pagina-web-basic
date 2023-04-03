var devuelvoUsuario= function(){
    return 'camilo';
};
var devuelvoSaludo = function(){
    return 'Hola';
};

var saludar = function(cb1,cb2){
    return cb1() + ' '+ cb2();

};
var resultado = saludar(devuelvoSaludo,devuelvoUsuario);
console.log(resultado);

var devuelvoFrase = function(comida){
    return 'Hoy quiero comer: '+ comida;
};
var Hablar = function(comida,cb){
    return cb(comida);

};
var fraseFinal= Hablar("Pizza",devuelvoFrase)
console.log(fraseFinal);