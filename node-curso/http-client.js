const http = require("http");
http
  .get(process.argv[2], function (response) {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.log);
  })
  .on("error", console.log);

// const http = require("http");
// const url = process.argv[2];
// http
//   .get(url, function (req, res) {
//     res.setEncoding("utf8"); // para q no vaya al buffer y llegue con utf8
//     res.on("data", console.log);
//     res.on("error", console.log.error);
//   })
//   .on("error", console.log.error);

// const http = require("http");
// const url = process.argv[2];
// http.get(url, function (req, res) {
//   req.setEncoding("utf8"); // para q no vaya al buffer y llegue con utf8
//   req.on("data", function (data) {
//     console.log(data);
//   });
// });

// node http-client.js http://www.google.com/es
//
