const fs = require("fs");
const dirname = process.argv[2];
const ext = process.argv[3];

fs.readdir(dirname, function (err, list) {
  if (err) {
    return console.log(err);
  }
  list.forEach(function (file) {
    file.split(".")[1] === ext ? console.log(file) : null;

    // if (file.endsWith(ext)) {
    //   console.log(file);
    // }
    //  no funciona para el caso de md
  });
});

//$ node filtered-ls.js testdir c       filtra los que termina en c
//learnyounode verify filtered-ls.js
