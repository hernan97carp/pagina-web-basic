var http = require("http");
var url = process.argv[2];
var body = "";

http.get(url, function (response) {
  response.on("data", function (chunk) {
    body += chunk;
  });
  response.on("end", function () {
    console.log(body.length);
    console.log(body);
  });
});

// var http = require("http");
// var url = process.argv[2];
// var body = "";

// http.get(url, function (response) {
//   response.on("data", function (chunk) {
//     body += chunk;
//   });
//   response.on("end", function () {
//     console.log(body.length);
//     console.log(body);
//   });
// });
// "use strict";

// var http = require("http");
// var bl = require("bl");

// http.get(process.argv[2], function (response) {
//   response.pipe(
//     bl(function (err, data) {
//       if (err) {
//         console.error(err);
//       }
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     })
//   );
// });

// const http = require("http");

// const url = process.argv[2];

// http.get(url, function (request) {
//   let result = "";
//   request.setEncoding("utf8");
//   request.on("data", function (data) {
//     result += data;
//   });
//   request.on("end", function () {
//     console.log(result.length);
//     console.log(result);
//   });
// });
