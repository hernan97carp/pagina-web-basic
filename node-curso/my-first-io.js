const fs = require("fs");
const filename = process.argv[2];
//esto devuelve un buffer
//sera asincrono bloqueante no va a seguir hasta la proxima linea hasta q termine de leer el fichero
const file = fs.readFileSync(filename, "utf-8");

// const content = file.toString();
//objetos buffer son una manera eficiente de node  de representar array de data
//se puede convertir usando to string example const str =  buf.toSring()

// const lines = content.split("\n").length;

const lines = file.split("\n").length - 1;
//salto \n nos vas a dar tantos elementos como lineas hayan
// \n salto de linea
console.log(lines);
