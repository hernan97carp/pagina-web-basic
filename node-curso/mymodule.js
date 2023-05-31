const fs = require("fs");

module.exports = function (dirname, ext, callback) {
  fs.readdir(dirname, function (err, list) {
    if (err) {
      return callback(err);
    }
    const result = [];

    list.forEach(function (file) {
      file.split(".")[1] === ext ? result.push(file) : null;
    });
    callback(null, result);
  });
};

//va a leer el directorio y si da a error no lo envia por consola sino por call back
//mete en una array todos los ficheros q va encontrando con esa extension
//asi no la pasamos por consola sino q la vemos por callback
