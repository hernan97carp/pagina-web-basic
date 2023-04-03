// console.log("hola")


 // FUNCIONES EXPRESADAS

 
// const contadorDeCaracteres = (cadena="")=>{
//     (!cadena)?console.warn("No ingresaste ninguna cadena"): console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`);
// }
// contadorDeCaracteres();
// contadorDeCaracteres("hola mundo")





//FUNCIONES DECLARADAS
function contadorDeCaracteres(cadena=""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
        }   else{
            console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}
contadorDeCaracteres();
contadorDeCaracteres("HOLA QUE HACES PIBE")

const recortarTexto  = (cadena="",longitud= undefined)=>{
    (!cadena)
    ?console.warn("no ingresaste una cadena de texto")
    :(longitud === undefined)
    ?console.warn("no ingresaste una longitud para recortar el texto")
    :console.info(`${cadena.slice(0,longitud)}`) // apartir de donde cuento y hasta donde me detengo slice
}
recortarTexto();
recortarTexto("hola mundo dos",7)


const caracterSeparador= (cadena="",separador= undefined)=>{
    (!cadena)
    ?
    console.warn("No ingresaste una cadena de texto")
    :(separador===undefined)
    ?console.warn("No ingresaste un separador de texto")
    :console.info(cadena.split(separador))
}
caracterSeparador("ene,feb,mar,abril"," ");
caracterSeparador("","2")
caracterSeparador("hola como estamos todo bien todo tranquilo"," ");
caracterSeparador("holaaaaaaa wuachin que ondaaaa separloooo","")


const repertirTexto =(texto="",veces=undefined)=>{
 if(!texto) return console.warn("cadena esta vacia");
 if(veces=== undefined) return console.warn("define cuantas veces se va a repetir");
 if(veces=== 0) return console.error("el numero de veces no puede ser 0");
 if(Math.sign(veces)===-1)return console.error("No puedes ingresar un numero negativo");
 for(let i=1; i <= veces;i++)console.info(`${texto},${i}`);   
}


repertirTexto("hola mundo", 0);
repertirTexto("hola mundo", 3);
repertirTexto("hola mundo",-1)
repertirTexto("hola LOCO", 6)

const invertirCadena= (cadena="")=>
(!cadena)
?console.warn("cadena esta vacia")
:console.info(cadena.split("").reverse().join(""));
invertirCadena();
invertirCadena("Hola mundo")


const textoEnCadena= (cadena="", texto="")=>{
if(!cadena)return console.warn("cadena vacia");
if(!texto) return console.warn("no hay texto");
let i=0,
contador= 0;
while(i !==-1){
    i = cadena.indexOf(texto, i);
    if(i !== -1){
        i++;
        contador++;
    }
}
return console.info(`"la palabra ${texto} se repite ${contador} de veces"`)
}
textoEnCadena()
textoEnCadena("hola mundo","hola mundo")