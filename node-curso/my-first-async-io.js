// learnyounode
const fs = require("fs");
const filename = process.argv[2];
let lines;

function handlefile(err, file) {
  if (err) {
    return console.log(err);
  }
  lines = file.split("\n").length - 1;
  console.log(lines);
}

fs.readFile(filename, "utf-8", handlefile);

// const filename = process.argv[2];

// const fs = require("fs");
// const file = process.argv[2];

// fs.readFile(filename, "utf8", function (err, file) {
//   if (err) {
//     return console.log(err);
//   }
//   const lines = file.split("\n").length - 1;
//   console.log(lines);
// });
