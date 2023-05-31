const http = require("http");
const urls = process.argv.slice(2);

const httpRequest = (url) => {
  return new Promise((resolve, rejected) => {
    http.get(url, function (request) {
      let result = "";
      request.setEncoding("utf8");
      request.on("data", (chunk) => {
        result += chunk;
      });
      request.on("end", () => resolve(result));

      request.on("error", (err) => rejected(err));
    });
  });
};
Promise.allSettled(urls.map((url) => httpRequest(url))).then((results) =>
  results.forEach((result) => console.log(result.value))
);

// Promise.allSettled([
//   httpRequest(urls[0]),
//   httpRequest(urls[1]),
//   httpRequest(urls[2]),
// ]).then((results) => results.forEach((result) => console.log(result.value)));
